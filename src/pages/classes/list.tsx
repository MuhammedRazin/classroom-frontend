import { Button } from "@/components/ui/button";
import { useNavigation } from "@refinedev/core";

const ClassesList = () => {
  const { create } = useNavigation();

  return (
    <div>
      <Button onClick={() => create("classes")}>
        Create Class
      </Button>
    </div>
  );
};

export default ClassesList;