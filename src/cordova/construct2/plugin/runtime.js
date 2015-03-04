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
                this.adService = this.properties[0];
                this.bannerAdunit = this.properties[1];
                this.interstitialAdunit = this.properties[2];
                this.banner = Cocoon.Ad.createBanner(this.bannerAdunit);
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

        /**
        // Not available. 
        Acts.prototype.CreateBannerDefault = function() {

        };

        Acts.prototype.CreateBannerSize = function(size) {

        };

        Acts.prototype.CreateBannerAdUnit = function(adunit) {

        };        

        Acts.prototype.CreateBannerFull = function(adunit,size) {

        };

        Acts.prototype.CreateInterstitialDefault = function(adunit) {

        };

        Acts.prototype.CreateInterstitialAdUnit = function(adunit) {

        }; 
        */

        Acts.prototype.ShowBanner = function() {
            banner.show();
        };
        Acts.prototype.HideBanner = function() {
            banner.hide();
        };        
        Acts.prototype.LoadBanner = function() {
            banner.load();
        };
        Acts.prototype.SetLayout = function(layout) {
            banner.setPosition(layout);
        };
        Acts.prototype.SetPosition = function(x,y) {
            banner.setPosition(x,y);
        };
        Acts.prototype.ShowInterstitial = function() {
            intesrtitial.show(); 
        };
        Acts.prototype.LoadInterstitial = function() {
            interstitial.load();
        };

        /**
        // Not available. 
        Acts.prototype.ReleaseInterstitial = function(anInterstitial) {
            Cocoon.Ad.releaseInterstitial(anInterstitial);
        };
        Acts.prototype.ReleaseBanner = function(aBanner) {
            Cocoon.Ad.releaseBanner(aBanner);
        };
        */
        pluginProto.acts = new Acts();

}());