var PDV_POLLRAND614851 = true;
 
 var PDV_a614851 = "";
 var PDV_o614851 = "";
 var PDV_id614851 = 614851;
 var PDV_pt614851 = 0;
 var PDV_po614851 = 0;
 var PDV_s614851 = 37263;
 var PDV_b614851 = 1;
 var PDV_l614851 = 0;
 var PDV_pr614851 = 1;
 var PDV_sl614851 = 0;
 var PDV_va614851 = 16;
 


 var PDV_server614851 = 'http://polls.polldaddy.com';

 
 var PDV_html614851 = '<div style="margin-bottom: 0px; margin-top: 0px;" name="PDI_form614851" id="PDI_form614851"><div class="pds-box"><div class="pds-box-outer"><div class="pds-box-inner"><div class="pds-box-top"><div class="pds-question"><div class="pds-question-outer"><div class="pds-question-inner"><div class="pds-question-top">Should hypertension be treated aggressively even in very old patients?</div></div></div></div><div class="pds-answer"><span id="pds-answer614851"></span>';
  
   

 PDV_html614851 += '</div><div class="pds-vote"><div class="pds-votebutton-outer"><input type="button" class="pds-votebutton" style="border:none;cursor: pointer;" src="http://s3.polldaddy.com/images/spacer.gif" value=" " onclick="PD_vote614851(0);"><a href="javascript:PD_vote614851(1);">&gt; View Results</a><br></div></div></div></div></div></div></div>';  

 var AA614851=new Array();
      
            AA614851[0]='<input class="pds-radiobutton" type="radio" id="PDI_answer3179481" value="3179481" name="PDI_answer614851"><label for="PDI_answer3179481">Yes</label><br>';
          
            AA614851[1]='<input class="pds-radiobutton" type="radio" id="PDI_answer3179482" value="3179482" name="PDI_answer614851"><label for="PDI_answer3179482">No</label><br>';
          

function PDF_a614851()
{
  PDF_o614851();
  var r;
  if(PDV_pt614851 == 1) 
  {
    for(i=0; i < AA614851.length; i++)
    {
      r = document.getElementById(AA614851[i].substring(AA614851[i].indexOf('id=')+4, AA614851[i].indexOf('"', AA614851[i].indexOf('id=')+4)));
      if (r.type == "checkbox" && r.checked)
		  {
        PDV_a614851 = PDV_a614851 + r.value + ",";
      }
    }
    return PDV_a614851;
  }
  else
  {
    for(var i = 0; i < AA614851.length; i++)
    {
      r = document.getElementById(AA614851[i].substring(AA614851[i].indexOf('id=')+4, AA614851[i].indexOf('"', AA614851[i].indexOf('id=')+4)));
      if(r.checked)
      {
        return r.value + ",";
      }
  }
  r = document.getElementById("PDI_answerOther614851");
  if(r){if(r.checked){return r.value + ",";}else{return '';}}else{return "";}}}
  function  PDF_o614851(r){if(PDV_po614851 == 1){PDV_o614851 = document.getElementById("PDI_OtherText614851").value;}}
function PDI_checkOther614851()
{
	if(PDV_pt614851 == 0)
	{
		document.getElementById("PDI_answerOther614851").checked = true;
	}
}
function PD_vote614851(R)
{
	var randomnumber=Math.floor(Math.random()*11);
	if(R==1)
	{
		var s = document.createElement("SCRIPT");
		s.src = PDV_server614851 + "/pollVote_V3.aspx?s="+ PDV_s614851 +"&vr=1&b="+ PDV_b614851 +"&p="+ PDV_id614851 +"&l="+ PDV_l614851 +"&sl="+ PDV_sl614851 +"&pr="+ PDV_pr614851 +"&pt="+ PDV_pt614851 +"&va="+ PDV_va614851 + "&cookie=" + PD_ck614851 + "&rdm="+  randomnumber + "&url=" + escape(location.href);
  var h = document.getElementsByTagName("head").item(0);
  h.appendChild(s);
  }
  else
  {
  if(PDV_b614851> 0)
		{
			Set_Cookie614851('PD_poll_614851', 'true', 30, '/', '', '' );
		}
		PDV_a614851 = ''; 
		PDV_a614851 = PDF_a614851(document.getElementById("PDI_form614851"));
		if(PDV_a614851.length == 0 && PDV_o614851.length == 0)
		{
			alert("Please choose an answer first!")
		}
		else
		{
			var s = document.createElement("SCRIPT");
			s.src = PDV_server614851 + "/pollVote_V3.aspx?s="+ PDV_s614851 +"&b="+ PDV_b614851 +"&p="+ PDV_id614851 +"&a="+ PDV_a614851 +"&o="+ PDV_o614851 +"&l="+ PDV_l614851 +"&sl="+ PDV_sl614851 +"&pr="+ PDV_pr614851 +"&pt="+ PDV_pt614851 +"&va="+ PDV_va614851 + "&cookie=" + PD_ck614851 + "&rdm=" + randomnumber + "&url=" + escape(location.href);
  var h = document.getElementsByTagName("head").item(0);
  h.appendChild(s);
  }
  }
  }
  var PD_pollString614851 = PDV_html614851;
var PD_ck614851 = 0;

function PDV_rand614851 ( myArray ) {
  var i = myArray.length;
  if ( i == 0 ) return false;
  while ( --i ) {
     var j = Math.floor( Math.random() * ( i + 1 ) );
     var tempi = myArray[i];
     var tempj = myArray[j];
     myArray[i] = tempj;
     myArray[j] = tempi;
   }
   return myArray;
}


function PDV_go614851()
{
	if(!document.getElementById('poll_style614851'))
	{
		fileref=document.createElement("style");
		fileref.setAttribute("type", "text/css");
		fileref.setAttribute("id", "poll_style614851");
		var def = '#PDI_container614851 .pds-box{width:174px;color:#fff;background:#fff url(http://group.bmj.com/bmjpg/images/polls/pdbmicro12-bottom-left.gif) no-repeat left bottom;font-family:Arial,Verdana,Helvetica,sans-serif;border:0px 0px 0px 0px;padding:0px 0px 1px 0px;margin:0px 0px 0px 0px} #PDI_container614851 .pds-box-outer{background:url(http://group.bmj.com/bmjpg/images/polls/pdbmicro12-bottom-right.gif) repeat-y right bottom;border:0px 0px 0px 0px;padding:0px 0px 0px 0px;margin:0px 0px 0px 0px} #PDI_container614851 .pds-box-inner{background:url(http://group.bmj.com/bmjpg/images/polls/pdbmicro12-top-left.gif) no-repeat left top;border:0px 0px 0px 0px;padding:0px 0px 0px 0px;margin:0px 0px 0px 0px} #PDI_container614851 .pds-box-top{background:url(http://group.bmj.com/bmjpg/images/polls/pdbmicro12-top-right.gif) no-repeat right top;padding:3px 3px 3px 3px;border:0px 0px 0px 0px;margin:0px 0px 0px 0px} #PDI_container614851 .pds-question{background:url(http://group.bmj.com/bmjpg/images/polls/pdqmicro12-bottom-left.gif) no-repeat left bottom;border:0px 0px 0px 0px;padding:0px 0px 0px 0px;margin:16px 3px 0px 3px} #PDI_container614851 .pds-question-outer{background:url(http://group.bmj.com/bmjpg/images/polls/pdqmicro12-bottom-right.gif) no-repeat right bottom;padding:0px 0px 2px 0px;border:0px 0px 0px 0px;margin:0px 0px 0px 0px} #PDI_container614851 .pds-question-inner{background:url(http://group.bmj.com/bmjpg/images/polls/pdqmicro12-top-left.gif) no-repeat left top;border:0px 0px 0px 0px;padding:0px 0px 0px 0px;margin:0px 0px 0px 0px} #PDI_container614851 .pds-question-top{background:url(http://group.bmj.com/bmjpg/images/polls/pdqmicro12-top-right.gif) no-repeat right top;padding:5px 5px 5px 5px;font-size:1.1em;font-weight:bold;color:#000;text-align:left !important;border:0px 0px 0px 0px;margin:0px 0px 0px 0px} #PDI_container614851 .pds-answer{font-size:1.1em;line-height:20px;color:#555;padding:5px;text-align:left;border:0px 0px 0px 0px;margin:0px 0px 0px 0px} #PDI_container614851 .pds-answer label{border:0px 0px 0px 0px;padding:0px 0px 0px 5px;margin:0px 0px 0px 0px} #PDI_container614851 .pds-radiobutton{border:0px 0px 0px 0px;padding:0px 0px 0px 0px;margin:0px 0px 0px 0px} #PDI_container614851 .pds-checkbox{border:0px 0px 0px 0px;padding:0px 0px 0px 0px;margin:0px 0px 0px 0px} #PDI_container614851 .pds-textfield{width:96%;font-size:9px;color:#777;background-color:#fff;border:1px;border-color:#999;padding:1px 1px 1px 1px;margin:2px 0px 0px 0px} #PDI_container614851 .pds-answer-feedback{background-color:#fff;padding:0px 0px 0px 0px;height:10px;margin:2px 0px 5px 0px;border:0px 0px 0px 0px} #PDI_container614851 .pds-answer-feedback-bar{background:url(http://group.bmj.com/bmjpg/images/polls/pdmicro1-bargif.gif) repeat-x;margin:2px;height:6px;border:0px 0px 0px 0px;padding:0px 0px 0px 0px} #PDI_container614851 .pds-vote{font-size:8px;color:#c3C4c7;line-height:15px;padding:5px 5px 6px 5px;border:0px 0px 0px 0px;margin:0px 0px 0px 0px} #PDI_container614851 .pds-votebutton-outer{border:0px 0px 0px 0px;padding:0px 0px 0px 0px;margin:0px 0px 0px 0px} #PDI_container614851 .pds-vote a{font-size:9px;color:#999;text-decoration:none;border-top:1px;border-bottom:1px;border-top-color:#fff;border-bottom-color:#fff;border-top-style:solid;border-bottom-style:solid;padding:1px 0px 1px 0px;margin:0px 0px 0px 0px} #PDI_container614851 input.pds-votebutton{width:52px;height:17px;background:url(http://group.bmj.com/bmjpg/images/polls/pdmicro1-votebutton.gif) no-repeat;outline:none;float:right;margin:0px 0px 0px 0px;padding:0px 0px 0px 0px;border:0px 0px 0px 0px} #PDI_container614851 input.pds-votebutton:hover{background:url(http://group.bmj.com/bmjpg/images/polls/pdmicro1-votebutton-hover.gif) no-repeat} #PDI_container614851 .pds-totalvotes-outer{border:0px 0px 0px 0px;padding:0px 0px 0px 0px;margin:0px 0px 0px 0px} #PDI_container614851 .pds-totalvotes-inner{font-size:9px;color:#666;background-color:#FFF;padding:2px 2px 2px 3px;margin:0px 0px 5px 0px;text-transform:uppercase;letter-spacing:0px;border:0px 0px 0px 0px}';
		if (fileref.styleSheet) // IE
		{fileref.styleSheet.cssText = def;} 
		else // the world
		{fileref.appendChild(document.createTextNode(def));}	  
    document.getElementsByTagName("head").item(0).appendChild(fileref);
	}
	if(!document.getElementById('PDI_container614851'))
	{document.write('<a name="pd_a_614851"></a><div class="PDS_Poll" id="PDI_container614851"></div>');}
	if(Get_Cookie614851('PD_poll_614851') == 'true')
	{PD_ck614851=1;}
	document.getElementById('PDI_container614851').innerHTML = PD_pollString614851;
	if(PDV_POLLRAND614851){AA614851 = PDV_rand614851(AA614851);}
	y614851 = '';
	for(x614851=0; x614851< AA614851.length; x614851++){y614851 = y614851 + AA614851[x614851];}
	document.getElementById('pds-answer614851').innerHTML = y614851;	
}
function Set_Cookie614851( name, value, expires, path, domain, secure ) 
{
	var today = new Date();
	today.setTime( today.getTime() );
	if ( expires )
	{expires = expires * 1000 * 60 * 60 * 24;}

	var expires_date = new Date( today.getTime() + (expires) );

	document.cookie = name + "=" +escape( value ) +
	( ( expires ) ? ";expires=" + expires_date.toGMTString() : "" ) + 
	( ( path ) ? ";path=" + path : "" ) + 
	( ( domain ) ? ";domain=" + domain : "" ) +
	( ( secure ) ? ";secure" : "" );
}

function Get_Cookie614851( check_name ) 
{
	var a_all_cookies = document.cookie.split( ';' );
	var a_temp_cookie = '';
	var cookie_name = '';
	var cookie_value = '';
	var b_cookie_found = false;

	for ( i = 0; i < a_all_cookies.length; i++ )
	{
		a_temp_cookie = a_all_cookies[i].split( '=' );
		cookie_name = a_temp_cookie[0].replace(/^\s+|\s+$/g, '');
		if ( cookie_name == check_name )
		{
			b_cookie_found = true;
			if ( a_temp_cookie.length >  1 )
			{
				cookie_value = unescape( a_temp_cookie[1].replace(/^\s+|\s+$/g, '') );
			}
			return cookie_value;
			break;
		}		
		a_temp_cookie = null;
		cookie_name = '';
	}	
	if ( !b_cookie_found )
	{return null;}
}	

PDV_go614851();

