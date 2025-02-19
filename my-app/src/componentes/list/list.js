import Goal from "./goals";

const listMock = [
    {
    'id': '1',
    'details': 'run for 30 mins',
    'period': 'day',
    'events': 1,
    'icon': '🏃‍♂️',
    'goal': 365,
    'plazo': '2030/01/01',
    'completed': 250
},
{
    'id': '2',
    'details': 'read a book',
    'period': 'year',
    'events': 6,
    'icon': '📕',
    'goal': 365,
    'plazo': '2030/01/01',
    'completed': 250
}, {
    'id': '3',
    'details': 'travel',
    'period': 'month',
    'events': 1,
    'icon': '🛬',
    'goal': 60,
    'plazo': '2030/01/01',
    'completed': 2
}
];

function Lista() {
    return ( 
        listMock.map(goal => <Goal {...goal}></Goal>)
     );
}

export default Lista;