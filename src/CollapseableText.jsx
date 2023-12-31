import { useState, useEffect } from "react";
import "@aws-amplify/ui-react/styles.css";
import { Text, Button } from "@aws-amplify/ui-react";

export default function(props) {
  const collapseLength = 25;
  const [collapsed, setCollapsed] = useState([]);

  useEffect(() => {
    setCollapsed(props.text.length > collapseLength);
  }, []);

  return (
    <div>
      <Text as={props.as} fontWeight={props.weight}>{collapsed ? `${props.text.slice(0, collapseLength)}...` : props.text}</Text>
      {props.text.length > collapseLength &&
        <Button variation="link" size="small" onClick={() => setCollapsed(!collapsed)}>{collapsed ? "Show more" : "Collapse"}</Button>
      }
    </div>
  );
};
