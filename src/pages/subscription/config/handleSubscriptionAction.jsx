const handleSubscriptionAction = (action, rowData) => {
    switch (action) {
        case 'view':
            // Implement view action logic
            console.log('Viewing:', rowData.id);
            break;
        case 'edit':
            // Implement edit action logic
            console.log('Editing:', rowData.id);
            break;
        case 'delete':
            // Implement delete action logic
            console.log('Deleting:', rowData.id);
            break;
        default:
            break;
    }
};

export default handleSubscriptionAction;
