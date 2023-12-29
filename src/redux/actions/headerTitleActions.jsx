export const SET_CURRENT_PAGE_NAME = 'SET_CURRENT_PAGE_NAME';
export const SET_SELECTED_IMAGE = 'SET_SELECTED_IMAGE';
export const SET_SELECTED_TENANT_NAME = 'SET_SELECTED_TENANT_NAME';
export const SET_SELECTED_PROFILE_PICTURE = 'SET_SELECTED_PROFILE_PICTURE';



export const setCurrentPageName = (pageName) => ({
    type: SET_CURRENT_PAGE_NAME,
    payload: pageName,
  });


export const setSelectedImage = (image) => ({
  type: SET_SELECTED_IMAGE,
  payload: image,
});

export const setSelctedTenantName = (name) => ({
  type: SET_SELECTED_TENANT_NAME,
  payload: name,
});

export const setSelectedProfilePicture = (image) => ({
  type: SET_SELECTED_PROFILE_PICTURE,
  payload: image,
});
