export function processResponseData(response) {
    const navData = {
        last: response.data.last,
        totalElements: response.data.totalElements,
        totalPages: response.data.totalPages,
        size: response.data.size,
        number: response.data.number,
        first: response.data.first,
        numberOfElements: response.data.numberOfElements,
        empty: response.data.empty,
    };
    const data = {
        content: response.data.content,
        navigationData: { ...navData },
        pageable: { ...response.data.pageable },
    };
    return data;
}
