var count = 2;

function validate() {
var un = document.myform.username.value;
var pw = document.myform.password.value;
var valid = false;

var unArray = ["barkha", "George", "Sarah", "Michael"];  // as many as you like - no comma after final entry
var pwArray = ["123", "Password2", "Password3", "Password4"];  // the corresponding passwords;

for (var i=0; i <unArray.length; i++) {
if ((un == unArray[i]) && (pw == pwArray[i])) {
valid = true;
break;
}
}

if (valid) {
/*alert ("Login was successful");*/
document.getElementById('login').style.display = 'none';
document.getElementById('section').style.display = 'block';
return false;
}

var t = " tries";
if (count == 1) {t = " try"}

if (count >= 1) {
alert ("Invalid username and/or password.  You have " + count + t + " left.");
document.myform.username.value = "";
document.myform.password.value = "";
setTimeout("document.myform.username.focus()", 25);
setTimeout("document.myform.username.select()", 25);
count --;
}

else {
alert ("Still incorrect! You have no more tries left!");
document.myform.username.value = "No more tries allowed!";
document.myform.password.value = "";
document.myform.username.disabled = true;
document.myform.password.disabled = true;
return false;
}

}
//container tabs
function getChildElementsByClassName(parentElement, className)
{
	var i, childElements, pattern, result;
	result = new Array();
	pattern = new RegExp("\\b"+className+"\\b");


	childElements = parentElement.getElementsByTagName('*');
	for(i = 0; i < childElements.length; i++)
	{
		if(childElements[i].className.search(pattern) != -1)
		{
			result[result.length] = childElements[i];
		}
	}
	return result;
}


function BuildTabs(containerId)
{
	var i, tabContainer, tabContents, tabHeading, title, tabElement;
	var divElement, ulElement, liElement, tabLink, iconLink, linkText;


	// assume that if document.getElementById exists, then this will work...
	if(! eval('document.getElementById') ) return;

	tabContainer = document.getElementById(containerId);
	if(tabContainer == null)
		return;

	tabContents = getChildElementsByClassName(tabContainer, 'tab-content');
	if(tabContents.length == 0)
		return;

	divElement = document.createElement("div");
  	divElement.className = 'tab-header';
  	divElement.id = containerId + '-header';
	ulElement = document.createElement("ul");
  	ulElement.className = 'tab-list'

	tabContainer.insertBefore(divElement, tabContents[0]);
	divElement.appendChild(ulElement);

	for(i = 0; i < tabContents.length; i++)
	{
		tabHeading = getChildElementsByClassName(tabContents[i], 'tab');
		title = tabHeading[0].childNodes[0].nodeValue;

		// create the tabs as an unsigned list
		liElement = document.createElement("li");
		liElement.id = containerId + '-tab-' + i;

		tabLink = document.createElement("a");
        
        iconElement = document.createElement("i");
        var icon = ['home','calendar','question-circle','user','tasks'];
       	iconElement.className = 'fa fa-' + icon[i] +' fa-fw';        
  
		linkText = document.createTextNode(title);

		tabLink.className = "tab-item";
        
		tabLink.setAttribute("href","javascript://");
		tabLink.setAttribute( "title", tabHeading[0].getAttribute("title"));
		tabLink.onclick = new Function ("ActivateTab('" + containerId + "', " + i + ")");

		ulElement.appendChild(liElement);
		liElement.appendChild(tabLink);
        tabLink.appendChild(iconElement);
		tabLink.appendChild(linkText);
        

		// remove the H1
		tabContents[i].removeChild;
	}
}

function ActivateTab(containerId, activeTabIndex)
{
	var i, tabContainer, tabContents;

	tabContainer = document.getElementById(containerId);
	if(tabContainer == null)
		return;

	tabContents = getChildElementsByClassName(tabContainer, 'tab-content');
   
	if(tabContents.length > 0)
	{
		for(i = 0; i < tabContents.length; i++)
		{
			//tabContents[i].className = "tab-content";
			tabContents[i].style.display = "none";
		}

		tabContents[activeTabIndex].style.display = "block";


    		tabList = document.getElementById(containerId + '-list');
		tabs = getChildElementsByClassName(tabContainer, 'tab-item');
		if(tabs.length > 0)
		{
			for(i = 0; i < tabs.length; i++)
			{
				tabs[i].className = "tab-item";
			}

			tabs[activeTabIndex].className = "tab-item tab-active";
			tabs[activeTabIndex].blur();
		}
	}
}

//login click with keyboard enter key
   function searchKeyPress(e)
    {
        // look for window.event in case event isn't passed in
        if (typeof e == 'undefined' && window.event) { e = window.event; }
        if (e.keyCode == 13)
        {
            document.getElementById('btnSearch').click();
        }
    }

//date in format
   var months = ['January','February','March','April','May','June','July','August','September','October','November','December'];       
    var today = new Date();
    today.setTime(today.getTime());   



