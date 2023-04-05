
Object.extend(Event, {
	_domReady : function() {
		if (arguments.callee.done) return;
		arguments.callee.done = true;
		if (this._timer) clearInterval(this._timer);
		this._readyCallbacks.each(function(f) { f() });
		this._readyCallbacks = null;
	},

	onDOMReady : function(f) {
		if (!this._readyCallbacks) {
			var domReady = this._domReady.bind(this);

			if (document.addEventListener) document.addEventListener("DOMContentLoaded", domReady, false);

			/*@cc_on @*/
			/*@if (@_win32)
				document.write("<script id=__ie_onload defer='true' src='javascript:void(0)'><\/script>");
				document.getElementById("__ie_onload").onreadystatechange = function() { if (this.readyState == "complete") domReady(); };
			/*@end @*/

			if (/WebKit/i.test(navigator.userAgent)) this._timer = setInterval(function() {if (/loaded|complete/.test(document.readyState)) domReady(); }, 10);

			Event.observe(window, 'load', domReady);
			Event._readyCallbacks =  [];
		}

		Event._readyCallbacks.push(f);
	}
});


/* ======================================================================== */


var BMJ = function(){

	return {

		/* -- BEGIN: DHTMLMenu ------------------------------------------------ */
		DHTMLMenu : function() {
			
			var CONFIG = {
				menu_id : "MainNav", // the DOM ID of the menu container
				hover_class : "Hover", // the class to give the top-level LI to "activate" the menu
				menu_time : 500 // time to keep the menus on after mouseout; in ms
			};

			return {
				menu_timeout : null, // the JS timeout ID for hiding the menu
				last_menu_on : null, // the DOM object of the waiting to close
				initialized : false, // have we fully initialized?

				// initialize the menus. usually called on page load / DOM ready
				init : function() {
					// bail out if the menu doesn't exist on this page
					if (!$(CONFIG["menu_id"]) || this.initialized) return;

					// get all the top-level LIs in the menu
					var menu_items = $(CONFIG["menu_id"]).immediateDescendants();

					function mouseover() {
						// stop the menu from closing (this gets called a lot)
						clearTimeout(this.menu_timeout);

						// show the menu
						this.showMenu(arguments[1]);
					}

					function mouseout() {
						var el = Event.element(arguments[0]);
						var item = arguments[1];

						// store the last item on
						this.last_menu_on = item;

						// since this gets called as a setTimeout it needs to be in the scope of our object
						var turnOff = function() {
							this.hideMenu(item);
							this.last_menu_on = null;
						}.bind(this);

						var submenu_length = $(el).up().immediateDescendants().length;

						// only "close" the menu in a little bit if we're over a menu with submenus, otherwise, close it right now
						if ( (el.parentNode.id && (submenu_length > 1)) || (submenu_length > 1) ) {
							this.menu_timeout = setTimeout(turnOff,	CONFIG["menu_time"]);

						} else {
							turnOff();
						}
					}

					// iterate over them and add event handlers
					$A(menu_items).each(function(item){
						item.observe("mouseover", mouseover.bindAsEventListener(this, item));
						item.observe("mouseout", mouseout.bindAsEventListener(this, item));
					}.bind(this));

					// since this is called twice, once onDOMReady and once on load, set this var the first time
					this.initialized = true;
				}, // END: init()

				// shows the menu
				showMenu : function(item) {
					// hide the last menu shown
					if (this.last_menu_on != null) this.hideMenu(this.last_menu_on);

					// adding the "hover" class turns on the menu
					$(item.id).addClassName(CONFIG['hover_class']);
				}, // END: showMenu()

				// hide the menu
				hideMenu : function(item) {
					if (item == null) return;

					// removing the "hover" class turns off the menu
					$(item.id).removeClassName(CONFIG['hover_class']);
				} // END: hideMenu()

			} // END: return
		}()
		/* -------------------------------------------------- END: DHTMLMenu -- */

	} // END: return
}(); // END: BMJ namespace

function initBMJ() { BMJ.DHTMLMenu.init(); }

Event.onDOMReady(initBMJ);
Event.observe(window, 'load', initBMJ);
