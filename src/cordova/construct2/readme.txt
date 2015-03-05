This plugin is specic for C2 users. It requires a cordova exportation. 
Important things to take into account. 
- You can use this plugin and the Webview+ for cordova (ios and android). 
- If you can't see ads after exportation, please, check the order of the scripts in the project index. 
* They should be in this order: 

	<!-- Construct 2 exported games require jQuery. -->
	<script src="jquery-2.1.1.min.js"></script>

	<script src="cordova.js"></script>

	<script src="cocoon.js"></script>
	<script src="cocoon_ads.js"></script>

* Instead of in this one: 

	<!-- Construct 2 exported games require jQuery. -->
	<script src="jquery-2.1.1.min.js"></script>

	<script src="cocoon.js"></script>
	<script src="cocoon_ads.js"></script>

	<script src="cordova.js"></script>

As this one is the default C2 exportation, it must be edited by hand until we find a better workaround. 
Installation and compilation. 
- In order to use this plugin, it is required to install: 
* Admob: 

* Mopub: 

Unless you are using our new cordova based cloud compiler. 	
- C2 by default exports everything on a folder. For being able to compile a project exported in this way in the cloud compiler is neccessary to: 
1) Create a folder called "www".
2) Move all the content of the exportation inside the folder except the generated "config.xml" file. 
3) Compress at least the www folder + the "config.xml" on a zip file. 
- If you are using our cloud compiler it is not required to include the plugin. Once at the cloud compiler and the first compilation has been triggered and finished, you must edit the config.xml to include the plugin. Just copy and paste one of this sample of codes, depending on in you want to use admob or mopub, and paste it on the config.xml. It can be done straight in the cloud. 
* Admob: 

* Mopub: 
