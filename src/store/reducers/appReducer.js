import * as actionTypes from '../actions';
import { groupAndSumUnique } from '../../helpers/sortData';

const initialState = {
  resources: [],
  vendors: [],
  loadingJson: false,
};

const reducer = (state = initialState, action) => {
  let newState = { ...state };
  switch (action.type) {

    case actionTypes.SET_LOADING:
      newState.loadingJson = true;
      return newState;

    case actionTypes.SET_JSON_DATA:
      // group uniqe resources
      let groupedResources = groupAndSumUnique(action.val, 'type');

      // change vendors type to prefix
      let TempVendors = action.val.map(item => {
        let newType = item.type.split('_')
        return { ...item, type: newType[0] }
      });

      // group vendors
      let groupVendors = groupAndSumUnique(TempVendors, 'type');

      newState.resources = groupedResources;
      newState.vendors = groupVendors;
      newState.loadingJson = false;
      
      return newState;

    default:
      return state;
  }
};

export default reducer;
