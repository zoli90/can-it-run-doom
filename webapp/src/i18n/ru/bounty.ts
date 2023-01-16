export const bounty = {
  howToAddItem: {
    title: 'Как добавить награду?',
    description: 'Что бы добавить награду, пришлите пожалуйста следующую информацию на адрес',
    instructions: [
      'Название платформы на которой хотели бы увидеть Doom. (пример: MP3 плеер Фирма, модель-123)',
      'Опешите платформу/устройство на которой стоит запустить Doom и/или оставьте ссылку на данную платформу/устройство.',
      '(опционально) Ссылка на изображение или прикрепите изображение к сообщению которое будет использовано для этой Награды.',
      '(опционально) Ваше имя/ник для прикрепления к этой награде.',
    ],
    orGithub: "<b>Или</b>, если вы знакомы с Github, вы можете открыть PR запрос с вашими наградами на <a class='doom-text-shadow-danger doom-color-secondary' href='{0}' target='blank'>bounty.json</a> файл.",
  },
  howToClaim: {
    title: 'Запросить Награду',
    description: 'Если вы хотите получить эту награду для себя или отправить запрос от чего-то имени, отправьте электронное письмо со следующий содержанием на адрес',
    includeId: 'Включите ИД(ID) [{0}] награды в сообщении.',
    instructions: [
        'Имена авторов выполнившие условия награды.',
        'Ссылка на видео запустившейся игры на данной платформе/устройстве.',
        '(опционально) Ссылка на исходный код, если таков имеется в публичном доступе.'
    ],
  }
}
