/**
 * Object holder for the plugin
 */
cr.plugins_.ATPAds = function(runtime) {
    this.runtime = runtime;
};
/**
 * C2 plugin
 */
(function() {
        var pluginProto = cr.plugins_.ATPAds.prototype;
        pluginProto.Type = function(plugin) {
            this.plugin = plugin;
            this.runtime = plugin.runtime;
        };
        var typeProto = pluginProto.Type.prototype;
        typeProto.onCreate = function() {};
        /**
         * C2 specific behaviour
         */
        pluginProto.Instance = function(type) {
            this.type = type;
            this.runtime = type.runtime;
        };
        var instanceProto = pluginProto.Instance.prototype;
        var self;
        
        instanceProto.onCreate = function() {

                this.androidBannerId = this.properties[0;]
                
                switch (this.properties[1]) {
                    case 0:     this.androidBannerSize = "SMART"; break;
                    case 1:     this.androidBannerSize = "BANNER"; break;
                    case 2:     this.androidBannerSize = "MEDIUM_REC"; break;
                    case 3:     this.androidBannerSize = "LEADERBOARD"; break;
                }
                    
                this.androidInterstitialId = this.properties[2];
                
                this.iosBannerId = this.properties[3];

                switch (this.properties[4]) {
                    case 0:     this.iosBannerSize = "SMART"; break;
                    case 1:     this.iosBannerSize = "BANNER"; break;
                    case 2:     this.iosBannerSize = "MEDIUM_REC"; break;
                    case 3:     this.iosBannerSize = "LEADERBOARD"; break;
                }

                this.iosInterstitialId = this.properties[5];
                
                if (this.runtime.isAndroid)
                {
                    this.bannerAdunit = this.androidBannerId;
                    this.bannerSize = this.androidBannerSize;
                    this.interstitialAdunit = this.androidInterstitialId;
                }
                else if (this.runtime.isiOS)
                {
                    this.bannerAdunit = this.iosBannerId;
                    this.bannerSize = this.iosBannerSize;
                    this.interstitialAdunit = this.iosInterstitialId;
                }
                else
                {
                    // unsupported platform
                    this.bannerAdunit = "";
                    this.interstitialAdunit = "";
                }

                this.banner = Cocoon.Ad.createBanner(this.bannerAdunit, );
                this.interstitial = Cocoon.Ad.creaInterstitial(this.interstitialAdunit);

                this.banner.on("show", function() {
                    self.runtime.trigger(cr.plugins_.ATPAds.prototype.cnds.OnBannerShown, self);
                });

                this.banner.on("load", function() {
                    self.runtime.trigger(cr.plugins_.ATPAds.prototype.cnds.OnBannerLoaded, self);
                });

                this.banner.on("hide", function() {
                    self.runtime.trigger(cr.plugins_.ATPAds.prototype.cnds.OnBannerHidden, self);
                });

                this.banner.on("click", function() {
                    self.runtime.trigger(cr.plugins_.ATPAds.prototype.cnds.OnBannerClicked, self);
                });

                this.banner.on("fail", function() {
                    self.runtime.trigger(cr.plugins_.ATPAds.prototype.cnds.OnBannerFailed, self);
                });

                this.banner.on("dismiss", function() {
                    self.runtime.trigger(cr.plugins_.ATPAds.prototype.cnds.OnBannerDismissed, self);
                });

                this.interstitial.on("show", function() {
                    self.runtime.trigger(cr.plugins_.ATPAds.prototype.cnds.OnInterstitialShown, self);
                });
                this.interstitial.on("load", function() {
                    self.runtime.trigger(cr.plugins_.ATPAds.prototype.cnds.OnInterstitialLoaded, self);
                });

                this.interstitial.on("click", function() {
                    self.runtime.trigger(cr.plugins_.ATPAds.prototype.cnds.OnInterstitialClicked, self);
                });

                this.interstitial.on("dismiss", function() {
                    self.runtime.trigger(cr.plugins_.ATPAds.prototype.cnds.OnInterstitialDismissed, self);
                });
        };

        function Cnds() {};
        Cnds.prototype.OnBannerShown = function() {
            return true;
        };
        Cnds.prototype.OnBannerHidden = function() {
            return true;
        };
        Cnds.prototype.OnBannerLoaded = function() {
            return true;
        };
        Cnds.prototype.OnBannerClicked = function() {
            return true;
        };
        Cnds.prototype.OnBannerFailed = function() {
             return true;
        };                
        Cnds.prototype.OnBannerDismissed = function() {
            return true;
        };
        Cnds.prototype.OnInterstitialShown = function() {
            return true;
        };
        Cnds.prototype.OnInterstitialLoaded = function() {
            return true;
        };
        Cnds.prototype.OnInterstitialClicked = function() {
            return true;
        };
        Cnds.prototype.OnInterstitialFailed = function() {
             return true;
        };           
        Cnds.prototype.OnInterstitialDismissed = function() {
            return true;
        }

        pluginProto.cnds = new Cnds();
        /**
         * Plugin actions
         */
        function Acts() {};


        Acts.prototype.ShowBanner = function() {
            this.banner.show();
        };
        Acts.prototype.HideBanner = function() {
            this.banner.hide();
        };        
        Acts.prototype.LoadBanner = function() {
            this.banner.load();
        };
        Acts.prototype.SetLayout = function(layout) {
            this.banner.setPosition(layout);
        };
        Acts.prototype.SetPosition = function(x,y) {
            this.banner.setPosition(x,y);
        };
        Acts.prototype.ShowInterstitial = function() {
            this.intesrtitial.show(); 
        };
        Acts.prototype.LoadInterstitial = function() {
            this.interstitial.load();
        };

        pluginProto.acts = new Acts();

}());