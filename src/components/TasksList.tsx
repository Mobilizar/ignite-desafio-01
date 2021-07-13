import React from 'react';
import { FlatList } from 'react-native';

import { ItemWrapper } from './ItemWrapper';

import { TaskItem } from './TaskItem';
import { EditTaskArgs } from '../pages/Home'
export interface Task {
  id: number;
  title: string;
  done: boolean;
}
interface TasksListProps {
  tasks: Task[];
  toggleTaskDone: (id: number) => void;
  removeTask: (id: number) => void;
  ediTask: ({ taskId, taskNewTitle }: EditTaskArgs) => void;
}

export function TasksList({ tasks, toggleTaskDone, removeTask, ediTask }: TasksListProps) {

  return (
    <FlatList
      data={tasks}
      keyExtractor={item => String(item.id)}
      contentContainerStyle={{ paddingBottom: 24 }}
      showsVerticalScrollIndicator={false}
      renderItem={({ item, index }) => {
        return (
          <ItemWrapper index={index}>
            <TaskItem
              index={index}
              task={item}
              toggleTaskDone={toggleTaskDone}
              removeTask={removeTask}
              ediTask={ediTask}
            />
          </ItemWrapper>
        )
      }}
      style={{
        marginTop: 32
      }}
    />
  )
}