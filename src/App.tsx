import ListC from "./components/testing_and_cheatsheets/ListC";
import ListC4 from "./components/testing_and_cheatsheets/ListC4";
import ListC5 from "./components/testing_and_cheatsheets/ListC5";

function App() {
  let items2 = ["l1", "sdgkds", "45839", "5235"];

  const handleSelectItem = (item: string) => {
    console.log("from the App: sdojgnskjdgn");
  };

  return (
    <>
      <ListC4 />
      <ListC5
        items={items2}
        heading="AAAAAAAAAAAAA"
        onSelectItem={handleSelectItem}
      />
    </>
  );
}

export default App;
