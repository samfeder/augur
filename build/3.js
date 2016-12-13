webpackJsonp([3],{1003:function(e,a,t){"use strict";var r=t(14),n=t.n(r),o=t(1040),s=t(1078),i=t(1077),l=t(1079),c=t(41),m=Object.assign||function(e){for(var a=1;a<arguments.length;a++){var t=arguments[a];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e},p=function(e){var a=void 0;switch(e.activeView){default:case c.b:a=n.a.createElement(s.a,m({},e.positions,{settings:e.settings}));break;case c.c:a=n.a.createElement(i.a,e.markets);break;case c.d:a=n.a.createElement(l.a,m({},e.reports,{branch:e.branch}))}return n.a.createElement("section",{id:"portfolio_view"},n.a.createElement("header",{className:"page-header portfolio-header"},!!e.navItems&&!!e.navItems.length&&n.a.createElement(o.a,{activeView:e.activeView,navItems:e.navItems})),n.a.createElement("div",{className:"page-content"},n.a.createElement("section",{className:"portfolio-content"},a)))};p.propTypes={navItems:r.PropTypes.array.isRequired,totals:r.PropTypes.object.isRequired,positions:r.PropTypes.object.isRequired,markets:r.PropTypes.object.isRequired,reports:r.PropTypes.object.isRequired,settings:r.PropTypes.object.isRequired},a.default=p},1007:function(e,a,t){"use strict";var r=t(14),n=t.n(r),o=t(64),s=t.n(o),i=function(e){return n.a.createElement("span",{className:s()("value-date",e.className)},e.formatted)};i.propTypes={className:r.PropTypes.string,value:r.PropTypes.object,formatted:r.PropTypes.string},a.a=i},1040:function(e,a,t){"use strict";var r=t(14),n=t.n(r),o=t(142),s=t.n(o),i=t(64),l=t.n(i),c=t(462),m=t(463),p=Object.assign||function(e){for(var a=1;a<arguments.length;a++){var t=arguments[a];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e},u=function(e){return n.a.createElement("div",{className:"tab-navigator"},!!e.navItems&&e.navItems.map(function(a,t){return"string"==typeof a.page&&(a.page=[a.page]),n.a.createElement(c.a,{key:""+t,className:l()("nav-item",{active:a.page.indexOf(e.activeView)>-1}),href:a.link.href,onClick:a.link.onClick},n.a.createElement("span",{className:"nav-label"},a.label),(!!a.leadingValue||!!a.trailingValue)&&n.a.createElement("section",{className:"nav-values"},a.leadingValue&&n.a.createElement(m.a,p({"data-tip":!0,"data-for":"tab-"+t+"-leading-tooltip"},a.leadingValue||{})),a.trailingValue&&n.a.createElement(m.a,p({"data-tip":!0,"data-for":"tab-"+t+"-trailing-tooltip",className:"colorize"},a.trailingValue||{})),n.a.createElement(s.a,{id:"tab-"+t+"-leading-tooltip",type:"light",effect:"solid",place:"top"},n.a.createElement("span",{className:"tooltip-text"},a.leadingTitle?a.leadingTitle+": "+a.leadingValue.full:"")),n.a.createElement(s.a,{id:"tab-"+t+"-trailing-tooltip",type:"light",effect:"solid",place:"top"},n.a.createElement("span",{className:"tooltip-text"},a.trailingTitle?a.trailingTitle+": "+a.trailingValue.full:""))))}))};a.a=u},1065:function(e,a,t){"use strict";var r=t(14),n=t.n(r),o=t(463),s=t(1007),i=Object.assign||function(e){for(var a=1;a<arguments.length;a++){var t=arguments[a];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e},l=function(e){return n.a.createElement("div",{className:"portfolio-row"},n.a.createElement("div",{className:"portfolio-group portfolio-main-group"},n.a.createElement("span",{className:"market-main-group-title"},"ends: "),n.a.createElement(s.a,e.endDate)),n.a.createElement("div",{className:"portfolio-group"},n.a.createElement("div",{className:"portfolio-pair total-value"},n.a.createElement("span",{className:"title"},"fees collected"),n.a.createElement(o.a,i({className:"colorize"},e.fees))),n.a.createElement("div",{className:"portfolio-pair"},n.a.createElement("span",{className:"title"},"open volume"),n.a.createElement(o.a,e.openVolume)),n.a.createElement("div",{className:"portfolio-pair"},n.a.createElement("span",{className:"title"},"volume"),n.a.createElement(o.a,e.volume)),n.a.createElement("div",{className:"portfolio-pair total-cost"},n.a.createElement("span",{className:"title"},"# of trades"),n.a.createElement(o.a,e.numberOfTrades)),n.a.createElement("div",{className:"portfolio-pair total-value"},n.a.createElement("span",{className:"title"},"avg trade size"),n.a.createElement(o.a,e.averageTradeSize))))};l.propTypes={endDate:r.PropTypes.object.isRequired,openVolume:r.PropTypes.object.isRequired,volume:r.PropTypes.object.isRequired,numberOfTrades:r.PropTypes.object.isRequired,averageTradeSize:r.PropTypes.object.isRequired,fees:r.PropTypes.object.isRequired},a.a=l},1066:function(e,a,t){"use strict";var r=t(14),n=t.n(r),o=t(463),s=t(21),i=function(e){return n.a.createElement("div",{className:"position"},n.a.createElement("div",{className:"position-group main-group"},e.type===s.b?n.a.createElement("span",{className:"position-name"},e.lastPricePercent.rounded):n.a.createElement("span",{className:"position-name"},e.name),n.a.createElement(o.a,e.qtyShares)),n.a.createElement("div",{className:"position-group"},n.a.createElement("div",{className:"position-pair purchase-price"},n.a.createElement("span",{className:"title"},"average price of open position"),n.a.createElement(o.a,e.purchasePrice)),n.a.createElement("div",{className:"position-pair last-price"},n.a.createElement("span",{className:"title"},"last trade price"),n.a.createElement(o.a,e.lastPrice))),n.a.createElement("div",{className:"position-group"},n.a.createElement("div",{className:"position-pair realized-net"},n.a.createElement("span",{className:"title"},"realized P/L"),n.a.createElement(o.a,e.realizedNet)),n.a.createElement("div",{className:"position-pair unrealized-net"},n.a.createElement("span",{className:"title"},"unrealized P/L"),n.a.createElement(o.a,e.unrealizedNet)),n.a.createElement("div",{className:"position-pair total-net"},n.a.createElement("span",{className:"title"},"total P/L"),n.a.createElement(o.a,e.totalNet))))};i.propTypes={name:n.a.PropTypes.string,type:n.a.PropTypes.string,qtyShares:n.a.PropTypes.object,gainPercent:n.a.PropTypes.object,lastPrice:n.a.PropTypes.object,lastPricePercent:n.a.PropTypes.object,purchasePrice:n.a.PropTypes.object,realizedNet:n.a.PropTypes.object,unrealizedNet:n.a.PropTypes.object,totalNet:n.a.PropTypes.object},a.a=i},1067:function(e,a,t){"use strict";var r=t(14),n=t.n(r),o=t(463),s=function(e){return n.a.createElement("article",{className:"positions-market-overview"},n.a.createElement("div",{className:"position"},n.a.createElement("span",{className:"description"},e.description),n.a.createElement("div",{className:"position-group"},n.a.createElement("div",{className:"position-pair realized-net"},n.a.createElement("span",{className:"title"},"total realized P/L"),n.a.createElement(o.a,e.realizedNet)),n.a.createElement("div",{className:"position-pair unrealized-net"},n.a.createElement("span",{className:"title"},"total unrealized P/L"),n.a.createElement(o.a,e.unrealizedNet)),n.a.createElement("div",{className:"position-pair total-net"},n.a.createElement("span",{className:"title"},"total P/L"),n.a.createElement(o.a,e.totalNet)))))};s.propTypes={description:n.a.PropTypes.string.isRequired,unrealizedNet:n.a.PropTypes.object.isRequired,realizedNet:n.a.PropTypes.object.isRequired},a.a=s},1068:function(e,a,t){"use strict";var r=t(14),n=t.n(r),o=t(142),s=t.n(o),i=t(1066),l=t(462),c=Object.assign||function(e){for(var a=1;a<arguments.length;a++){var t=arguments[a];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e},m=function(e){return n.a.createElement("article",{className:"positions-list"},e.marketLink&&n.a.createElement(l.a,{key:e.market.id,href:e.marketLink.href,onClick:e.marketLink.onClick},(e.market.myPositionOutcomes||[]).map(function(a){return n.a.createElement(i.a,c({key:e.market.id+"-"+a.id,type:e.market.type},a,a.position))})),!e.marketLink&&(e.market.myPositionOutcomes||[]).map(function(a){return n.a.createElement(i.a,c({key:a.id,type:e.market.type},a,a.position))}),!e.settings.autoSellCompleteSets&&e.market.hasCompleteSet&&n.a.createElement("div",{className:"complete-sets"},n.a.createElement("div",{className:"close-position-button"},n.a.createElement("button",{"data-tip":e.market.smallestPosition.full,className:"button",onClick:function(a){a.stopPropagation(),e.market.onSubmitClosePosition()}},"Redeem ",e.market.smallestPosition.formatted," Complete Sets"))),n.a.createElement(s.a,{type:"light",effect:"solid",place:"top",globalEventOff:"click"}))};a.a=m},1069:function(e,a,t){"use strict";var r=t(14),n=t.n(r),o=t(142),s=t.n(o),i=t(463),l=t(1007),c=Object.assign||function(e){for(var a=1;a<arguments.length;a++){var t=arguments[a];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e},m=function(e){return n.a.createElement("div",{className:"portfolio-row"},n.a.createElement("div",{className:"portfolio-group portfolio-main-group"},n.a.createElement("div",{className:"portfolio-pair"},n.a.createElement("span",{className:"report-main-group-title"},"outcome: "),n.a.createElement("span",{className:"report-main-group-title-outcome"},e.outcome&&e.outcomePercentage&&e.outcomePercentage.value&&n.a.createElement("span",null,e.outcome,"  (",n.a.createElement(i.a,e.outcomePercentage),")"),e.outcome&&!e.outcomePercentage&&n.a.createElement("span",null,e.outcome),!e.outcome&&"-")),n.a.createElement("div",{className:"portfolio-pair"},n.a.createElement("span",{className:"report-main-group-title"},"reported: "),n.a.createElement("span",{className:"report-main-group-title-outcome"},!!e.isCommitted&&!e.isRevealed&&n.a.createElement("span",{className:"report-committed","data-tip":"You have successfully committed to this report. Remember to login to reveal the report!"},e.reported||"-"),!!e.isRevealed&&n.a.createElement("span",{className:"report-revealed"},e.reported||"-"),!e.isRevealed&&!e.isCommitted&&n.a.createElement("span",null,e.reported||"-"),!!e.outcome&&e.isReportEqual&&n.a.createElement("span",{className:"fa report-equal","data-tip":"Your report matches the consensus outcome"},""),!!e.outcome&&!e.isReportEqual&&n.a.createElement("span",{className:"fa report-unequal","data-tip":"Your report does not match the consensus outcome"},""),!!e.isUnethical&&n.a.createElement("span",{className:"fa report-unethical","data-tip":"You reported that this market is unethical"},""))),n.a.createElement("div",{className:"portfolio-pair"},n.a.createElement("span",{className:"report-main-group-title"},"cycle: "),n.a.createElement("span",{className:"report-main-group-title-outcome"},e.period?n.a.createElement("span",{"data-tip":e.branch.currentPeriod-e.period+" reporting cycles ago"},e.period):"-"))),n.a.createElement("div",{className:"portfolio-group"},n.a.createElement("div",{className:"portfolio-pair"},n.a.createElement("span",{className:"title"},"rep gain/loss"),n.a.createElement(i.a,c({className:"colorize"},e.repEarned))),n.a.createElement("div",{className:"portfolio-pair"},n.a.createElement("span",{className:"title"},"ended"),n.a.createElement(l.a,e.endDate))),n.a.createElement(s.a,{type:"light",effect:"solid",place:"top"}))};a.a=m},1077:function(e,a,t){"use strict";var r=t(14),n=t.n(r),o=t(1065),s=t(462),i=Object.assign||function(e){for(var a=1;a<arguments.length;a++){var t=arguments[a];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e},l=function(e){return n.a.createElement("div",null,!!e.markets&&!!e.markets.length&&e.markets.map(function(e){return n.a.createElement(s.a,i({key:e.id},e.marketLink),n.a.createElement("div",{className:""},n.a.createElement("span",{className:"description"},e.description),!!e&&n.a.createElement("article",{className:"portfolio-list"},n.a.createElement(o.a,e))))}))};a.a=l},1078:function(e,a,t){"use strict";var r=t(14),n=t.n(r),o=t(1068),s=t(1067),i=t(462),l=Object.assign||function(e){for(var a=1;a<arguments.length;a++){var t=arguments[a];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e},c=function(e){return n.a.createElement("div",{className:"positions-content"},!!e.markets&&!!e.markets.length&&e.markets.map(function(a){return n.a.createElement("div",{key:a.id,className:"positions-container"},n.a.createElement(i.a,{href:a.marketLink.href,onClick:a.marketLink.onClick},n.a.createElement(s.a,l({description:a.description},a.myPositionsSummary))),!!a.myPositionOutcomes&&!!a.myPositionOutcomes.length&&n.a.createElement(o.a,{className:"page-content positions-content",market:a,marketLink:a.marketLink,settings:e.settings}))}))};a.a=c},1079:function(e,a,t){"use strict";var r=t(14),n=t.n(r),o=t(142),s=t.n(o),i=t(1069),l=t(462),c=Object.assign||function(e){for(var a=1;a<arguments.length;a++){var t=arguments[a];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e},m=function(e){return n.a.createElement("div",null,!!e.reports&&!!e.reports.length&&e.reports.map(function(a){return n.a.createElement(l.a,c({key:""+a.marketId},a.marketLink),n.a.createElement("div",{key:a.marketId},n.a.createElement("span",{className:"description"},a.description,a.isChallenged&&n.a.createElement("span",{className:"fa outcome-challenged","data-tip":"This outcome is currently being challenged"},""),!a.isChallenged&&a.isChallengeable&&n.a.createElement("span",{className:"fa outcome-challengeable","data-tip":"This outcome is eligible to be challenged"},"")),!!a&&n.a.createElement("article",{className:"portfolio-list"},n.a.createElement(i.a,c({},a,{branch:e.branch})))))}),n.a.createElement(s.a,{type:"light",effect:"solid",place:"top"}))};a.a=m}});