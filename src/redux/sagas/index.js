// sagas/index.js
import { all } from 'redux-saga/effects';
import invoiceSaga from './invoiceSaga';
import paymentSaga from './paymentSaga';
import promotionSaga from './promotionSaga';
import tenantSaga from './tenantSaga';
import userSaga from './userSaga';
import subscriptionSaga from './subscriptionSaga';
import { watchLoginUser } from './authSaga';
import paymentMethodSaga from './paymentMethodSaga';
import creditCardSaga from './creditCardSaga';
function* rootSaga() {
    yield all([
        tenantSaga(),
        paymentSaga(),
        invoiceSaga(),
        userSaga(),
        promotionSaga(),
        subscriptionSaga(),
        watchLoginUser(),
        paymentMethodSaga(),
        creditCardSaga(),
        // Add other sagas here
    ]);
}

export default rootSaga;
