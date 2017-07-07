// NOTE -- no longer used, leaving temporarily for historical ref

// import abc from 'modules/auth/selectors/abc';
import loginAccount from 'modules/auth/selectors/login-account';
import links from 'modules/link/selectors/links';
import categories from 'modules/categories/selectors/categories';
import marketsHeader from 'modules/markets/selectors/markets-header';
import marketsTotals from 'modules/markets/selectors/markets-totals';
import pagination from 'modules/markets/selectors/pagination';
import markets from 'modules/markets/selectors/markets';
import allMarkets from 'modules/markets/selectors/markets-all';
import favoriteMarkets from 'modules/markets/selectors/markets-favorite';
import filteredMarkets from 'modules/markets/selectors/markets-filtered';
import unpaginatedMarkets from 'modules/markets/selectors/markets-unpaginated';
import orderCancellation from 'modules/bids-asks/selectors/order-cancellation';
import market from 'modules/market/selectors/market';
import tags from 'modules/markets/selectors/tags';
import filterSort from 'modules/markets/selectors/filter-sort';
import portfolio from 'modules/portfolio/selectors/portfolio';
import loginAccountPositions from 'modules/my-positions/selectors/login-account-positions';
import transactions from 'modules/transactions/selectors/transactions';
import transactionsTotals from 'modules/transactions/selectors/transactions-totals';
import isTransactionsWorking from 'modules/transactions/selectors/is-transactions-working';
import tradesInProgress from 'modules/trade/selectors/trade-in-progress';
import tradeCommitLock from 'modules/trade/selectors/trade-commit-lock';
import coreStats from 'modules/account/selectors/core-stats';
import chat from 'modules/chat/selectors/chat-messages';
import { MARKET_DATA_NAV_ITEMS } from 'modules/market/constants/market-data-nav-items';
import { MARKET_USER_DATA_NAV_ITEMS } from 'modules/market/constants/market-user-data-nav-items';
import scalarShareDenomination from 'modules/market/selectors/scalar-share-denomination';
import { OUTCOME_TRADE_NAV_ITEMS } from 'modules/outcomes/constants/outcome-trade-nav-items';
import closePositionStatus from 'modules/my-positions/selectors/close-position-status';
import openOrders from 'modules/user-open-orders/selectors/open-orders';
import notifications from 'modules/notifications/selectors/notifications';

const selectors = {
  // abc,
  loginAccount,
  links,
  marketsHeader,
  marketsTotals,
  pagination,
  markets,
  allMarkets,
  favoriteMarkets,
  filteredMarkets,
  unpaginatedMarkets,
  orderCancellation,
  market,
  categories,
  tags,
  filterSort,
  portfolio,
  loginAccountPositions,
  transactions,
  transactionsTotals,
  notifications,
  isTransactionsWorking,
  tradesInProgress,
  tradeCommitLock,
  coreStats,
  chat,
  marketDataNavItems: () => MARKET_DATA_NAV_ITEMS,
  marketUserDataNavItems: () => MARKET_USER_DATA_NAV_ITEMS,
  scalarShareDenomination,
  outcomeTradeNavItems: () => OUTCOME_TRADE_NAV_ITEMS,
  closePositionStatus,
  openOrders
};

export default selectors;
