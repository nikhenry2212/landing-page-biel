;/*FB_PKG_DELIM*/

__d("PolarisAboutAdsDialogItem.react",["fbt","IGCoreDialog","PolarisExternalLink.react","PolarisIGCoreText","react"],(function(a,b,c,d,e,f,g,h){"use strict";var i=d("react"),j="https://help.instagram.com/478880589321969";function a(){return i.jsx(d("IGCoreDialog").IGCoreDialogItem,{children:i.jsx(c("PolarisExternalLink.react"),{href:j,children:i.jsx(c("PolarisIGCoreText").Body,{children:h._("Sobre os an\u00fancios do Instagram")})})})}a.displayName=a.name+" [from "+f.id+"]";g["default"]=a}),98);
__d("PolarisPostFastOptionCopyAdId.react",["fbt","IGCoreDialog","PolarisClipboard","PolarisIGCoreText","PolarisReactRedux","PolarisToastActions","react"],(function(a,b,c,d,e,f,g,h){"use strict";var i=d("react"),j=h._("Identifica\u00e7\u00e3o do an\u00fancio copiada.");function a(a){a=a.adInfo;var b=a.ad_id,e=d("PolarisReactRedux").useDispatch();a=function(){if(b==null)return;d("PolarisClipboard").copy(b);e(d("PolarisToastActions").showToast({text:j}))};return i.jsx(d("IGCoreDialog").IGCoreDialogItem,{onClick:a,children:i.jsx(c("PolarisIGCoreText").Body,{children:h._("Identifica\u00e7\u00e3o do an\u00fancio: {ad id} (Copiar)",[h._param("ad id",b)])})})}a.displayName=a.name+" [from "+f.id+"]";g["default"]=a}),98);
__d("PolarisPostFastOptionCopyAdMediaId.react",["fbt","IGCoreDialog","PolarisClipboard","PolarisIGCoreText","PolarisReactRedux","PolarisToastActions","react"],(function(a,b,c,d,e,f,g,h){"use strict";var i=d("react"),j=h._("Identifica\u00e7\u00e3o da m\u00eddia copiada.");function a(a){var b=a.post,e=d("PolarisReactRedux").useDispatch();a=function(){d("PolarisClipboard").copy(b.id),e(d("PolarisToastActions").showToast({text:j}))};return i.jsx(d("IGCoreDialog").IGCoreDialogItem,{onClick:a,children:i.jsx(c("PolarisIGCoreText").Body,{children:h._("Identifica\u00e7\u00e3o da m\u00eddia: {media id} (Copiar)",[h._param("media id",b.id)])})})}a.displayName=a.name+" [from "+f.id+"]";g["default"]=a}),98);
__d("PolarisPostFastOptionCopyAdTrackingToken.react",["fbt","IGCoreDialog","PolarisClipboard","PolarisIGCoreText","PolarisReactRedux","PolarisToastActions","react"],(function(a,b,c,d,e,f,g,h){"use strict";var i=d("react"),j=h._("Token de rastreamento copiado.");function a(a){a=a.adInfo;var b=a.tracking_token,e=d("PolarisReactRedux").useDispatch();a=function(){if(b==null)return;d("PolarisClipboard").copy(b);e(d("PolarisToastActions").showToast({text:j}))};return i.jsx(d("IGCoreDialog").IGCoreDialogItem,{onClick:a,children:i.jsx(c("PolarisIGCoreText").Body,{children:h._("Copiar token de rastreamento do an\u00fancio")})})}a.displayName=a.name+" [from "+f.id+"]";g["default"]=a}),98);
__d("PolarisPostFastOptionInjectAd.react",["fbt","IGCoreDialog","PolarisIGCoreText","PolarisNavigationUtils","URI","react"],(function(a,b,c,d,e,f,g,h){"use strict";var i=d("react"),j="https://www.internalfb.com/intern/instagram/ads/injecttool/";function a(a){a=a.adInfo;a=a.ad_id;if(a==null)return null;var b=new(c("URI"))(j).addQueryData({custom_ad_ids:a}).toString();a=function(){d("PolarisNavigationUtils").openURLWithFullPageReload(b,{openInNewTab:!0})};return i.jsx(d("IGCoreDialog").IGCoreDialogItem,{onClick:a,children:i.jsx(c("PolarisIGCoreText").Body,{children:h._("Inserir an\u00fancio")})})}a.displayName=a.name+" [from "+f.id+"]";g["default"]=a}),98);
__d("PolarisPostFastOptionOpenAdIDD.react",["fbt","IGCoreDialog","PolarisIGCoreText","PolarisNavigationUtils","URI","react"],(function(a,b,c,d,e,f,g,h){"use strict";var i=d("react"),j="https://internalfb.com/intern/ads/idd/",k="ig_web";function a(a){a=a.adInfo;a=a.ad_id;if(a==null)return null;var b=new(c("URI"))(j).addQueryData({id:a,referral:k}).toString();a=function(){d("PolarisNavigationUtils").openURLWithFullPageReload(b,{openInNewTab:!0})};return i.jsx(d("IGCoreDialog").IGCoreDialogItem,{onClick:a,children:i.jsx(c("PolarisIGCoreText").Body,{children:h._("Abrir an\u00fancio na IDD")})})}a.displayName=a.name+" [from "+f.id+"]";g["default"]=a}),98);
__d("PolarisPostFastOptionOpenAdInfo.react",["fbt","IGCoreDialog","PolarisIGCoreText","PolarisNavigationUtils","URI","react"],(function(a,b,c,d,e,f,g,h){"use strict";var i=d("react"),j="https://internalfb.com/intern/ads/ad_info.php/";function a(a){a=a.adInfo;a=a.ad_id;if(a==null)return null;var b=new(c("URI"))(j).addQueryData({id:a}).toString();a=function(){d("PolarisNavigationUtils").openURLWithFullPageReload(b,{openInNewTab:!0})};return i.jsx(d("IGCoreDialog").IGCoreDialogItem,{onClick:a,children:i.jsx(c("PolarisIGCoreText").Body,{children:h._("Abrir an\u00fancio nas informa\u00e7\u00f5es do an\u00fancio")})})}a.displayName=a.name+" [from "+f.id+"]";g["default"]=a}),98);
__d("PolarisAdDebugToolModalContent.react",["fbt","IGCoreDialog","PolarisIGCoreText","PolarisPostFastOptionCopyAdId.react","PolarisPostFastOptionCopyAdMediaId.react","PolarisPostFastOptionCopyAdTrackingToken.react","PolarisPostFastOptionInjectAd.react","PolarisPostFastOptionOpenAdIDD.react","PolarisPostFastOptionOpenAdInfo.react","PolarisadsSelectors","react"],(function(a,b,c,d,e,f,g,h){"use strict";var i=d("react");function a(a){var b=a.post,e=a.forFeed;a=a.onClose;var f=null,g=d("PolarisadsSelectors").useFeedAdInfo(b.id,function(a){return a}),j=d("PolarisadsSelectors").useStoryAdInfo(b.id,function(a){return a});e?f=g:f=j;return i.jsxs(d("IGCoreDialog").IGCoreDialog,{onModalClose:a,children:[i.jsx(d("IGCoreDialog").IGCoreDialogItem,{children:i.jsx(c("PolarisIGCoreText").Section,{children:h._("[Meta-only] Ferramenta de depura\u00e7\u00e3o de an\u00fancios")})}),i.jsx(c("PolarisPostFastOptionCopyAdMediaId.react"),{post:b}),f!=null&&i.jsxs(i.Fragment,{children:[i.jsx(c("PolarisPostFastOptionCopyAdId.react"),{adInfo:f}),i.jsx(c("PolarisPostFastOptionCopyAdTrackingToken.react"),{adInfo:f}),i.jsx(c("PolarisPostFastOptionOpenAdIDD.react"),{adInfo:f}),i.jsx(c("PolarisPostFastOptionOpenAdInfo.react"),{adInfo:f}),i.jsx(c("PolarisPostFastOptionInjectAd.react"),{adInfo:f})]})]})}a.displayName=a.name+" [from "+f.id+"]";g["default"]=a}),98);
__d("InstagramAdHideButtonFalcoEvent",["FalcoLoggerInternal","getFalcoLogPolicy_DO_NOT_USE"],(function(a,b,c,d,e,f){"use strict";a=b("getFalcoLogPolicy_DO_NOT_USE")("3448");c=b("FalcoLoggerInternal").create("instagram_ad_hide_button",a);e.exports=c}),null);
__d("PolarisHideAdDialogItem.react",["IGCoreDialog","InstagramAdHideButtonFalcoEvent","PolarisContainerModuleUtils","PolarisGenericStrings","react","usePolarisAnalyticsContext","usePolarisViewer"],(function(a,b,c,d,e,f,g){"use strict";var h=d("react");function a(a){var b=a.adId,e=a.adInsertedPosition,f=a.adTrackingToken,g=a.mpk,i=a.onClick,j=a.reelCounter,k=a.reelId,l=a.traySession,m=a.viewerSession,n=c("usePolarisViewer")();a=c("usePolarisAnalyticsContext")();var o=d("PolarisContainerModuleUtils").getContainerModule(a);a=function(){c("InstagramAdHideButtonFalcoEvent").log(function(){return{ad_id:b,ad_inserted_position:e,m_pk:g,pk:n==null?void 0:n.id,pigeon_reserved_keyword_module:o,reel_id:k,session_reel_counter:j,source_of_action:o,tracking_token:f,tray_session_id:l,viewer_session_id:m}}),i()};return h.jsx(d("IGCoreDialog").IGCoreDialogItem,{color:"ig-error-or-destructive","data-testid":void 0,onClick:a,children:d("PolarisGenericStrings").HIDE_AD_TEXT})}a.displayName=a.name+" [from "+f.id+"]";g["default"]=a}),98);
__d("InstagramAdReportButtonFalcoEvent",["FalcoLoggerInternal","getFalcoLogPolicy_DO_NOT_USE"],(function(a,b,c,d,e,f){"use strict";a=b("getFalcoLogPolicy_DO_NOT_USE")("3450");c=b("FalcoLoggerInternal").create("instagram_ad_report_button",a);e.exports=c}),null);
__d("PolarisReportAdDialogItem.react",["IGCoreDialog","InstagramAdReportButtonFalcoEvent","PolarisContainerModuleUtils","PolarisGenericStrings","PolarisInteractionsLogger","PolarisLinkBuilder","PolarisMonitorErrors","PolarisViewpointActionUtils","PolarisisUserLoggedIn","PolarisrelationshipSelectors","browserHistory","err","react","usePolarisAnalyticsContext","usePolarisViewer"],(function(a,b,c,d,e,f,g){"use strict";var h=d("react");function a(a){var b=a.adId,e=a.adInsertedPosition,f=a.adTrackingToken,g=a.mpk,i=a.onClick,j=a.post,k=a.reelCounter,l=a.reelId,m=a.traySession,n=a.viewerSession,o=c("usePolarisViewer")();a=c("usePolarisAnalyticsContext")();var p=d("PolarisInteractionsLogger").getMediaTypeFromPost(j);j=j.owner;j=d("PolarisrelationshipSelectors").useRelationship((j==null?void 0:j.id)||"");var q=j!=null?d("PolarisViewpointActionUtils").getFollowStatus(j):null,r=d("PolarisContainerModuleUtils").getContainerModule(a);j=function(){if(!d("PolarisisUserLoggedIn").isUserLoggedIn())d("browserHistory").redirect(d("PolarisLinkBuilder").buildLoginLink(window.location.href,{source:"logged_out_post_report_redirect"}));else if(f!=null&&q!=null&&g!=null)c("InstagramAdReportButtonFalcoEvent").logImmediately(function(){return{ad_id:b,ad_inserted_position:e,follow_status:q,m_pk:g,m_t:p.toString(),pk:o==null?void 0:o.id,pigeon_reserved_keyword_module:r,reel_id:l,session_reel_counter:k,source_of_action:r,tracking_token:f,tray_session_id:m,viewer_session_id:n}});else{if(q==null){var a=c("err")("followStatus cannot be null");d("PolarisMonitorErrors").logError(a)}if(f==null){a=c("err")("adTrackingToken cannot be null");d("PolarisMonitorErrors").logError(a)}if(g==null){a=c("err")("mpk cannot be null");d("PolarisMonitorErrors").logError(a)}}i()};return h.jsx(d("IGCoreDialog").IGCoreDialogItem,{color:"ig-error-or-destructive",onClick:j,children:d("PolarisGenericStrings").REPORT_AD_TEXT})}a.displayName=a.name+" [from "+f.id+"]";g["default"]=a}),98);
__d("PolarisWAISTDialogItem.react",["fbt","IGCoreDialog","react"],(function(a,b,c,d,e,f,g,h){"use strict";var i=d("react");function a(a){a=a.onClick;return i.jsx(d("IGCoreDialog").IGCoreDialogItem,{onClick:a,children:h._("Por que voc\u00ea est\u00e1 vendo esse an\u00fancio?")})}a.displayName=a.name+" [from "+f.id+"]";g["default"]=a}),98);
__d("PolarisWAISTModalContent.react",["fbt","CometPlaceholder.react","IGCoreModal","JSResourceForInteraction","PolarisIGCoreBox","PolarisIGCoreModalHeader","PolarisIGCoreSVGIconButton","PolarisIGCoreSpinner","PolarisIGCoreXPanoOutlineIcon","PolarisLogger","lazyLoadComponent","react"],(function(a,b,c,d,e,f,g,h){"use strict";var i=d("react");b=d("react");var j=b.useEffect,k=b.useMemo,l=c("lazyLoadComponent")(c("JSResourceForInteraction")("IGWebBloksApp").__setRef("PolarisWAISTModalContent.react")),m=h._("Por que voc\u00ea est\u00e1 vendo esse an\u00fancio"),n="com.bloks.www.bloks.ig_waist_landing_page",o=h._("Fechar"),p="108px";function a(a){var b=a.onClose,e=a.adId;j(function(){d("PolarisLogger").logPageView("adsWAISTModal")},[]);a=i.jsxs(i.Fragment,{children:[i.jsx(c("PolarisIGCoreModalHeader"),{children:m}),i.jsx(c("PolarisIGCoreBox"),{direction:"row",justifyContent:"center",margin:4,children:i.jsx(c("PolarisIGCoreSpinner"),{})})]});var f=k(function(){return{ad_id:e}},[e]);return i.jsx(c("IGCoreModal"),{onClose:b,children:i.jsxs(c("PolarisIGCoreBox"),{maxHeight:"100%",overflow:"auto",children:[i.jsx(c("PolarisIGCoreBox"),{justifyContent:"center",minHeight:p,children:i.jsx(c("CometPlaceholder.react"),{fallback:a,children:i.jsx(l,{appId:n,loadingFallback:a,params:f})})}),i.jsx(c("PolarisIGCoreBox"),{padding:1,position:"absolute",right:!0,children:i.jsx(c("PolarisIGCoreSVGIconButton"),{onClick:b,children:i.jsx(c("PolarisIGCoreXPanoOutlineIcon"),{alt:o,size:18})})})]})})}a.displayName=a.name+" [from "+f.id+"]";g["default"]=a}),98);
__d("PolarisPostShareUtils",["PolarisLinkBuilder","PolarisgetPostFromGraphMediaInterface","nullthrows"],(function(a,b,c,d,e,f,g){"use strict";function a(a,b){return(b==null?void 0:b.isPrivate)!==!0&&a.viewerCanReshare===!0}function h(a){var b=c("nullthrows")(a.code);if(d("PolarisgetPostFromGraphMediaInterface").isIGTVPost(a))return d("PolarisLinkBuilder").buildFelixMediaLink(b);else if(d("PolarisgetPostFromGraphMediaInterface").isClipsPost(a))return d("PolarisLinkBuilder").buildClipsMediaLink(b);return d("PolarisLinkBuilder").buildMediaLink(b)}function b(a){var b;b=((b=a.shareIds)==null?void 0:b.copy)||"";a=window.location.origin+h(a);return b.length>0?a+"?utm_source=ig_web_copy_link&igshid="+b:a+"?utm_source=ig_web_copy_link"}g.getIsShareable=a;g.getShareURL=h;g.getCopyUrl=b}),98);
__d("PolarisPostTypeUtils",[],(function(a,b,c,d,e,f){"use strict";function a(a){if(a.isVideo===!0)return"video";return a.sidecarChildren&&a.sidecarChildren.length>0?"sidecar":"photo"}f.getPostType=a}),66);
__d("PolarisPostFastOptionCopyLink.react",["fbt","IGCoreDialog","PolarisClipboard","PolarisLogger","PolarisPostModalContext.react","PolarisPostShareUtils","PolarisPostTypeUtils","react","usePolarisAnalyticsContext","usePolarisShowToast"],(function(a,b,c,d,e,f,g,h){"use strict";var i=d("react"),j=h._("Link copiado para a \u00e1rea de transfer\u00eancia."),k=h._("Copiar link");function a(a){var b=a.onClose;a=a.post;var e=d("PolarisPostModalContext.react").useSetPostModal(),f=c("usePolarisShowToast")(),g=c("usePolarisAnalyticsContext")(),h=d("PolarisPostTypeUtils").getPostType(a),l=d("PolarisPostShareUtils").getCopyUrl(a);if(a.owner==null)return null;a=d("PolarisPostShareUtils").getIsShareable(a,a.owner);if(!a)return null;a=function(){if(!d("PolarisClipboard").canCopy()){e("copy");return}var a=d("PolarisClipboard").copy(l);d("PolarisLogger").logAction("postLinkCopy",{source:g,type:h});a?(f({text:j}),b()):e("copy")};return i.jsx(d("IGCoreDialog").IGCoreDialogItem,{onClick:a,children:k})}a.displayName=a.name+" [from "+f.id+"]";g.LINK_COPIED_PROMPT=j;g.COPY_LINK_TEXT=k;g.PostFastOptionCopyLink=a}),98);