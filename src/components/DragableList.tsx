import { Button, Form, Input } from "antd";
import { CloseOutlined, PlusOutlined, DragOutlined } from "@ant-design/icons";
import {
  DragDropContext,
  Droppable,
  Draggable,
  DropResult,
} from "react-beautiful-dnd";

export const DragableList = ({
  items,
  actions,
}: {
  items: any[];
  actions: any;
}) => {
  const onDragEnd = (result: DropResult) => {
    if (!result.destination) return;
    actions.move(result.source.index, result.destination.index);
  };

  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <Droppable droppableId="droppable">
        {(provided, snapshot) => (
          <div {...provided.droppableProps} ref={provided.innerRef}>
            {items.map((item, index) => (
              <Draggable
                key={"key" + item.name + index}
                draggableId={"key" + item.name + index}
                index={index}
              >
                {(provided, snapshot) => (
                  <div
                    ref={provided.innerRef}
                    {...provided.draggableProps}
                    {...provided.dragHandleProps}
                    style={{
                      width: "100%",
                      display: "flex",
                      ...provided.draggableProps.style,
                    }}
                    key={item.name + index}
                  >
                    <Button
                      style={{
                        marginRight: 10,
                        opacity: index === 0 ? 0 : 1,
                        pointerEvents: index === 0 ? "none" : "all",
                      }}
                      type="text"
                      icon={<CloseOutlined />}
                      danger
                      onClick={() => actions.remove(item.name)}
                    ></Button>
                    <Button
                      style={{
                        marginRight: 10,
                        cursor: "grab",
                        pointerEvents: "none",
                      }}
                      type="text"
                      icon={<DragOutlined />}
                    ></Button>
                    <Form.Item
                      style={{ flexGrow: 1 }}
                      name={[item.name, "name"]}
                      rules={[
                        { required: true, message: "choice can't be empty" },
                      ]}
                    >
                      <Input />
                    </Form.Item>
                    {index === items.length - 1 && (
                      <Button
                        type="text"
                        onClick={() => actions.add()}
                        icon={<PlusOutlined />}
                        style={{ marginLeft: 10 }}
                      />
                    )}
                  </div>
                )}
              </Draggable>
            ))}
            {provided.placeholder}
          </div>
        )}
      </Droppable>
    </DragDropContext>
  );
};
