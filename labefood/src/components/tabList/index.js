import { Tabs, TabList, Tab, TabPanels, TabPanel } from "@chakra-ui/react";

export const TabListFeed = ({setTabIndex, restaurantesFeed}) => {
    return (
        <>
          <Tabs colorScheme="red" onChange={(index) => setTabIndex(index)}>
            <TabList overflowX="auto">
              <Tab>Todos</Tab>
              <Tab>Árabe</Tab>
              <Tab>Asiática</Tab>
              <Tab>Baiana</Tab>
              <Tab>Carnes</Tab>
              <Tab>Hambúrguer</Tab>
              <Tab>Italiana</Tab>
              <Tab>Mexicana</Tab>
              <Tab>Petiscos</Tab>
              <Tab>Sorvetes</Tab>
            </TabList>
            <TabPanels align='center'>
              <TabPanel>{restaurantesFeed}</TabPanel>
              <TabPanel>{restaurantesFeed}</TabPanel>
              <TabPanel>{restaurantesFeed}</TabPanel>
              <TabPanel>{restaurantesFeed}</TabPanel>
              <TabPanel>{restaurantesFeed}</TabPanel>
              <TabPanel>{restaurantesFeed}</TabPanel>
              <TabPanel>{restaurantesFeed}</TabPanel>
              <TabPanel>{restaurantesFeed}</TabPanel>
              <TabPanel>{restaurantesFeed}</TabPanel>
              <TabPanel>{restaurantesFeed}</TabPanel>
            </TabPanels>
          </Tabs>
        </>
      );
}