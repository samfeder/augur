import { UPDATE_SELECTED_MARKETS_HEADER } from 'modules/markets/actions/update-selected-markets-header';
import { UPDATE_URL } from 'modules/link/actions/update-url';

import getValue from 'utils/get-value';

export default function (selectedMarketsHeader = null, action) {
  switch (action.type) {
    case UPDATE_URL: {
      const paramSubset = getValue(action, 'parsedURL.searchParams.subset');
      if (paramSubset) return paramSubset;

      const paramCategory = getValue(action, 'parsedURL.searchParams.category');
      if (paramCategory) return paramCategory;

      return null;
    }
    case UPDATE_SELECTED_MARKETS_HEADER:
      return action.selectedMarketsHeader;

    default:
      return selectedMarketsHeader;
  }
}
