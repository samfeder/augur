import React, { PropTypes } from 'react';
import MarketItem from '../../market/components/market-item';
import FormButtons from '../../create-market/components/create-market-form-buttons';
import ValueDenomination from '../../common/components/value-denomination';

const CreateMarketForm5 = (p) => (
	<div className="step-5">
		<h1>Review and submit your new market</h1>
		<MarketItem {...p} />
		<ValueDenomination className="market-creation-fee" {...p.marketCreationFee} prefix="Market creation fee:" />
		<br />
		<ValueDenomination className="gas-cost" {...p.gasCost} prefix="Gas cost:" />
		<br />
		<ValueDenomination className="event-bond" {...p.eventBond} prefix="Bond (refundable):" />
		<br />
		<FormButtons
			nextLabel="submit new market"
			onNext={p.onSubmit}
			onPrev={() => p.onValuesUpdated({ step: p.step - 1 })}
		/>
	</div>
);

CreateMarketForm5.propTypes = {
	marketCreationFee: PropTypes.object,
	gasCost: PropTypes.object,
	eventBond: PropTypes.object,
	onSubmit: PropTypes.func
};

export default CreateMarketForm5;
