import React from 'react';
import ReactDOM from 'react-dom';

import App from 'components/App';

const tasks = [
    {
        'id': 1,
        'name': 'Реализовать ToDo list',
        'group': 'done',
        'description': ''
    }, {
        'id': 2,
        'name': 'Добавить фильтр для TODO',
        'group': 'done',
        'description': ''
    }, {
        'id': 3,
        'name': 'Добавить сортировку',
        'group': 'progress',
        'description': ''
    }, {
        'id': 4,
        'name': 'Создать форму для добавления задачи в To Do',
        'group': 'open',
        'description': ''
    }, {
        'id': 5,
        'name': 'Добавить удаление задачи',
        'group': 'open',
        'description': ''
    }
];

ReactDOM.render(
  <App tasks={tasks} />,
  document.getElementById('app')
);

module.hot.accept();