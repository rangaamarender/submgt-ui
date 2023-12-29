import ActiveTaskListTab from '../components/ActiveTaskListTab';
import AllTaskListTab from '../components/AllTaskListTab';
import InActiveTaskListTab from '../components/InActiveTaskListTab';

const taskTabs  = ({columnConfig,handleFilterClick}) =>  [
    {
        id: 'allTaskList',
        label: 'Task List',

        content: <AllTaskListTab handleFilterClick={handleFilterClick} columnConfig={columnConfig}/>,
    },
    {
        id: 'activeTaskList',
        label: 'Board',

        content: <ActiveTaskListTab handleFilterClick={handleFilterClick} columnConfig={columnConfig}/>,
    },
    {
        id: 'inactiveCompanyList',
        label: 'Calender',

        content: <InActiveTaskListTab handleFilterClick={handleFilterClick} columnConfig={columnConfig}/>,
    },

    // Add more tabs as needed
];

export default taskTabs;
