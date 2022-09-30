export const NOTION_STATUS_LIST = [
  {
    "type": "section",
    "block_id": "section_update",
    "text": {
      "type": "mrkdwn",
      "text": "どのステータスに更新しますか？"
    },
    "accessory": {
      "action_id": "update_notion",
      "type": "static_select",
      "placeholder": {
        "type": "plain_text",
        "text": "Select Status"
      },
      "options": [
        {
          "text": {
            "type": "plain_text",
            "text": "Todo"
          },
          "value": "Todo"
        },
        {
          "text": {
            "type": "plain_text",
            "text": "In Progress"
          },
          "value": "In Progress"
        },
        {
          "text": {
            "type": "plain_text",
            "text": "On Hold"
          },
          "value": "On Hold"
        },
        {
          "text": {
            "type": "plain_text",
            "text": "Done"
          },
          "value": "Done"
        }
      ]
    }
  }]

export const STATUS_LIST: TaskStatus = {
  Todo: {
    "id": "?`:^",
    "name": "Todo",
    "color": "pink"
  },
  "In Progress": {
    "id": "73b27396-e78f-4257-aab5-a98252f4c93f",
    "name": "In Progress",
    "color": "blue"
  },
  "On Hold": {
    "id": "qpcr",
    "name": "On Hold",
    "color": "gray"
  },
  Done: {
    "id": ">=aX",
    "name": "Done",
    "color": "green"
  }
}

