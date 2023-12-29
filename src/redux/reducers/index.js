// reducers/index.js
import { combineReducers } from 'redux';
import authReducer from './authReducer';
import invoiceReducer from './invoiceReducer';
import paymentMethodReducer from './paymentMethodReducer';
import paymentReducer from './paymentReducer';
import promotionReducer from './promotionReducer';
import sidebarReducer from './sidebarReducer';
import subscriptionReducer from './subscriptionReducer';
import tenantReducer from './tenantReducer';
import userReducer from './userReducer';
import creditCardReducer from './creditCardReducer';
import headerTitleReducer from './headerTitleReducer';


const rootReducer = combineReducers({
    sidebar: sidebarReducer,
    auth: authReducer,
    tenant: tenantReducer,
    payment: paymentReducer,
    invoice: invoiceReducer,
    user: userReducer,
    promotion: promotionReducer,
    subscription: subscriptionReducer,
    paymentMethod: paymentMethodReducer,
    creditCard: creditCardReducer,
    headerTitle: headerTitleReducer,
    // Add other reducers here
});

export default rootReducer;
