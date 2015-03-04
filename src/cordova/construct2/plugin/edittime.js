function GetPluginSettings() {
    return {
        "name": "Atomic Plugins for Ads",
        "id": "ATPAds",
        "version": "1.0",
        "description": "Access to Atomic Plugins for Ads",
        "author": "Ludei",
        "help url": "http://www.ludei.com",
        "category": "Platform specific",
        "type": "object", // not in layout
        "rotatable": false,
        "flags": pf_singleglobal,
        "dependency": "cocoon.js;cocoon_ads.js"
    };
};

/**
 * Conditions
 */

// Banners
AddCondition(0, cf_trigger, "On banner shown", "Banners", "On banner shown", "Triggered when a banner is shown.", "onBannerShown");

AddCondition(1, cf_trigger, "On banner hidden", "Banners", "On banner hidden", "Triggered when a banner is hidden.", "onBannerHidden");

AddCondition(2, cf_trigger, "On banner clicked", "Banners", "On banner clicked", "Triggered when a banner is clicked.", "onBannerClicked");

AddCondition(3, cf_trigger, "On banner loaded", "Banners", "On banner loaded", "Triggered when a new banner ad is cached.", "onBannerLoaded");

AddCondition(4, cf_trigger, "On banner failed", "Banners", "On banner failed", "Triggered when a banner fails to load.", "onBannerFailed");

AddCondition(5, cf_trigger, "On banner dismissed", "Banners", "On banner dismissed", "Triggered when a new banner is collapsed after showing its modal content.", "onBannerDismissed");

// Interstitials
AddCondition(6, cf_trigger, "On interstitial shown", "Interstitials", "On interstitial shown", "Triggered when an interstitial is shown.", "onInterstitialShown");

AddCondition(7, cf_trigger, "On interstitial clicked", "Interstitials", "On interstitial clicked", "Triggered when an interstitial is clicked.", "onInterstitialClicked");

AddCondition(8, cf_trigger, "On interstitial loaded", "Interstitials", "On interstitial loaded", "Triggered when an new interstitial ad is cached.", "onInterstitialLoaded");

AddCondition(9, cf_trigger, "On interstitial failed", "Interstitials", "On interstitial failed", "Triggered when an interstitial fails to load.", "onInterstitialFailed");

AddCondition(10, cf_trigger, "On interstitial dismissed", "Interstitials", "On interstitial dismissed", "Triggered when an new interstitial is dismissed.", "onBannerDismissed");

/**
 * Actions
 */

// Banners

// Layout 
AddComboParamOption("TOP_CENTER");
AddComboParamOption("BOTTOM_CENTER");
AddComboParamOption("CUSTOM");
AddComboParam("Layout", "Choose where the banner ad will appear.");
AddAction(4, 0, "Set banner layout", "Banners", "Set banner layout", "Set banner layout. If CUSTOM, 'set banner position' can be called afterwards.", "SetLayout");

// Position 
AddNumberParam("x", "The top lef x coordinate of the banner.");
AddNumberParam("y", "The top lef y coordinate of the banner.");
AddAction(5, 0, "Set banner position", "Banners", "Set banner position", "Set banner position given the x{0} and y{1} coordinates. It requires the CUSTOM layout (see 'set banner layout')", "SetPosition");

// Show
AddAction(6, 0, "Show banner", "Banners", "Show the banner ad", "Show a banner ad on the screen while the game is running.", "ShowBanner");

// Hide
AddAction(7, 0, "Hide banner", "Banners", "Hide the banner ad", "Hide any currently showing banner ad.", "HideBanner");

// Load 
AddAction(8, 0, "Load banner", "Banners", "Load a banner ad", "Start loading a banner ad in the background.", "LoadBanner");

// Interstitials

// Show
AddAction(12, 0, "Show interstitial", "Interstitials", "Show the banner ad", "Show a banner ad on the screen while the game is running.", "ShowInterstitial");

//Load 
AddAction(13, 0, "Load interstitial", "Interstitials", "Load a banner ad", "Start loading an interstitial in the background.", "LoadInterstitial");

ACESDone();

/**
 * Plugin properties
 */

var property_list = [
    new cr.Property(ept_section, "Android", "", "Ad unit IDs for Android."),
    new cr.Property(ept_text,   "Banner ID (Android)",  "", "Ad unit ID from admob or mopub for the banner ad."),
    new cr.Property(ept_combo,  "Banner size (Android)",    "SMART",    "The size of the banner ad to display", "SMART|BANNER|MEDIUM_RECT|LEADERBOARD"),
    new cr.Property(ept_text,   "Interstitial ID (Android)", "",        "Ad unit ID from admob or mopub for the interstitials."),
    
    new cr.Property(ept_section, "iOS", "", "Ad unit IDs for iOS."),
    new cr.Property(ept_text,   "Banner ID (iOS)",  "", "Ad unit ID admob or mopub for the banner ad."),
    new cr.Property(ept_combo,  "Banner size (iOS)",    "SMART",    "The size of the banner ad to display", "SMART|BANNER|MEDIUM_RECT|LEADERBOARD"),
    new cr.Property(ept_text,   "Interstitial ID (iOS)",    "", "Ad unit ID admob or mopub for the interstitials.")
];

// Called by IDE when a new object type is to be created
function CreateIDEObjectType() {
    return new IDEObjectType();
}

// Class representing an object type in the IDE
function IDEObjectType() {
    assert2(this instanceof arguments.callee, "Constructor called as a function");
}

// Called by IDE when a new object instance of this type is to be created
IDEObjectType.prototype.CreateInstance = function(instance) {
    return new IDEInstance(instance, this);
}

// Class representing an individual instance of an object in the IDE
function IDEInstance(instance, type) {
    assert2(this instanceof arguments.callee, "Constructor called as a function");

    // Save the constructor parameters
    this.instance = instance;
    this.type = type;

    // Set the default property values from the property table
    this.properties = {};

    for (var i = 0; i < property_list.length; i++)
        this.properties[property_list[i].name] = property_list[i].initial_value;
}

// Called by the IDE after all initialization on this instance has been completed
IDEInstance.prototype.OnCreate = function() {}

// Called by the IDE after a property has been changed
IDEInstance.prototype.OnPropertyChanged = function(property_name) {}

// Called by the IDE to draw this instance in the editor
IDEInstance.prototype.Draw = function(renderer) {}

// Called by the IDE when the renderer has been released (ie. editor closed)
// All handles to renderer-created resources (fonts, textures etc) must be dropped.
// Don't worry about releasing them - the renderer will free them - just null out references.
IDEInstance.prototype.OnRendererReleased = function() {}