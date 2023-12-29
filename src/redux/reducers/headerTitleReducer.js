import { SET_CURRENT_PAGE_NAME, SET_SELECTED_IMAGE, SET_SELECTED_TENANT_NAME, SET_SELECTED_PROFILE_PICTURE } from "../actions/headerTitleActions";


const initialState = {
    currentPageName: 'Dashboard', // Default page name
    selectedImage: null,
    selectedTenantName: 'Tenant Name',
    selectedProfilePicture: null
  };

  const headerTitleReducer = (state = initialState, action) => {
    switch (action.type) {
      case SET_CURRENT_PAGE_NAME:
        return {
          ...state,
          currentPageName: action.payload,
        };
        case SET_SELECTED_IMAGE:
         return {
          ...state,
          selectedImage: action.payload,
         }
         case SET_SELECTED_TENANT_NAME:
          return {
            ...state,
            selectedTenantName: action.payload,
          }
         case SET_SELECTED_PROFILE_PICTURE:
          return {
            ...state,
            selectedProfilePicture: action.payload,
          }
      default:
        return state;
    }
  };
  
  export default headerTitleReducer;