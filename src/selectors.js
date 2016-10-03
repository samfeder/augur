import activePage from './selectors/active-page';
import authForm from './selectors/auth-form';
import orderCancellation from './selectors/order-cancellation';
import createMarketForm from './selectors/create-market-form';
import filters from './selectors/filters';
import keywords from './selectors/keywords';
import links from './selectors/links';
import loginAccount from './selectors/login-account';
import market from './selectors/market';
import markets from './selectors/markets';
import marketsTotals from './selectors/markets-totals';
import marketDataUpdater from './selectors/market-data-updater';
import marketDataAge from './selectors/market-data-age';

import isTransactionsWorking from './selectors/is-transactions-working';
import transactions from './selectors/transactions';
import transactionsTotals from './selectors/transactions-totals';
import url from './selectors/url';
import portfolio from './selectors/portfolio';
import portfolioNavItems from './selectors/portfolio-nav-items';
import portfolioTotals from './selectors/portfolio-totals';
import loginAccountPositions from './selectors/login-account-positions';
import loginAccountMarkets from './selectors/login-account-markets';
import loginAccountReports from './selectors/login-account-reports';
import myReports from './selectors/my-reports';
import tradeCommitLock from './selectors/trade-commit-lock';
import positionsMarkets from './selectors/positions-markets';
import myMarkets from './selectors/my-markets';
import search from './selectors/search';
import marketsFilterSort from './selectors/markets-filter-sort';
import pagination from './selectors/pagination';
import selectedOutcome from './selectors/selected-outcome';

// all selectors should go here
const selectors = {
	activePage,
	authForm,
	orderCancellation,
	createMarketForm,
	filters,
	keywords,
	links,
	loginAccount,
	market,
	markets,
	marketsTotals,
	isTransactionsWorking,
	transactions,
	transactionsTotals,
	url,
	portfolio,
	portfolioNavItems,
	portfolioTotals,
	marketDataUpdater,
	marketDataAge,
	loginAccountPositions,
	loginAccountMarkets,
	loginAccountReports,
	tradeCommitLock,
	// For inclusion in AURC solo testing (former may accumulate from below)
	// TODO -- may be an improvement available for how the tests run such that this wouldn't be necessary
	myReports,
	myMarkets,
	positionsMarkets,
	search,
	marketsFilterSort,
	pagination
};

// add update helper fn to selectors object
Object.defineProperty(selectors, 'update', {
	value: (newState = {}, options = {}) => {
		if (process.env.NODE_ENV !== 'test' && !options.ignore) {
			console.log('*** update', newState);
		}

		Object.keys(newState).forEach(key => {
			selectors[key] = newState[key];
		});
		selectors.render();
	},
	enumerable: false
});

module.exports = selectors;
