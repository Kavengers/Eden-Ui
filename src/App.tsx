import React from 'react';
import { Button } from './components/Button';
import { Counters } from './components/Counters';
import { FormHeader } from './components/FormHeader';
import { InputField } from './components/InputField';
import { Logo } from './components/Logo';
import { OptionTabs } from './components/OptionTabs';

function App() {

  const [currentItem, setCurrentItem] = React.useState<number>(1);
  const [fullName, setFullName] = React.useState<string>("");
  const [displayName, setDisplayName] = React.useState<string>("");
  const [workspaceName, setWorkspaceName] = React.useState<string>("");
  const [workspaceUrl, setWorkspaceUrl] = React.useState<string>("");
  const [useFor, setUseFor] = React.useState<number>(1);

  const handleValueChange = (fieldName: string, value: string) => {
    switch (fieldName) {
      case "fullName":
        setFullName(value);
        break;
      case "displayName":
        setDisplayName(value);
        break;
      case "workspaceName":
        setWorkspaceName(value);
        break;
      case "workspaceUrl":
        setWorkspaceUrl(value);
        break;
      case "useFor":
        setUseFor(parseInt(value, 10));
    }
  }

  const handleNextPart = (item: number) => {
    if (currentItem === 1 && item > 1 && (fullName === "" || displayName === "")) {
      return;
    }
    if ((currentItem === 2 || currentItem === 1) && item > 2 && workspaceName === "") {
      return;
    }
    setCurrentItem(item);
  }

  const usageTypes = [
    {
      id: 1,
      icon: 'user.png',
      activeIcon: 'user-active.png',
      heading: "For myself",
      content: "Write better. Think more clearly. Stay organized."
    },
    {
      id: 2,
      icon: 'customer.png',
      activeIcon: 'customer-active.png',
      heading: "With my team",
      content: "Wikis, docs, tasks & projects, all in one place."
    }
  ];

  const data = {
    contexts: [
      {
        currentItemId: 1,
        formPart: (<>
          <InputField name="fullName" onKeyPress={handleValueChange} type='text' value={fullName} placeholder='Steve Jobs' label='Full Name' />
          <InputField name="displayName" onKeyPress={handleValueChange} type='text' value={displayName} placeholder='Steve' label='Display Name' />
          <Button onClick={() => handleNextPart(2)}>Create Workspace</Button>
        </>),
        heading: 'Welcome! First things first...',
        desc: 'You can always change them later.',
      },
      {
        currentItemId: 2,
        formPart: (<>
          <InputField name="workspaceName" onKeyPress={handleValueChange} type='text' value={workspaceName} placeholder='Eden' label='Workspace Name' />
          <InputField name="workspaceUrl" onKeyPress={handleValueChange} type='text' optional value={workspaceUrl} placeholder='Example' label='Workspace URL' prefix="www.eden.com/" />
          <Button onClick={() => handleNextPart(3)}>Create Workspace</Button>
        </>),
        heading: "Let's set up a home for all your work",
        desc: 'You can always create another workspace later.',
      },
      {
        currentItemId: 3,
        formPart: (<>
          <OptionTabs defaultValue={useFor} onSelect={handleValueChange} data={usageTypes} />
          <Button onClick={() => handleNextPart(4)}>Create Workspace</Button>
        </>),
        heading: "How are you planning to use Eden?",
        desc: "We'll streamline your setup experience accordingly.",
      },
      {
        currentItemId: 2,
        formPart: <Button onClick={() => handleNextPart(1)}>Launch Eden</Button>,
        heading: 'Congratulations, ',
        desc: 'You have completed',
        img: 'success.svg'
      }
    ]

  }


  return (
    <div className="App">
      <div className="container">
        <Logo img='icon.svg' text='Eden' />
        <Counters totalItems={data.contexts.length} current={currentItem} onClick={handleNextPart} />
        <FormHeader heading={data.contexts[currentItem - 1].heading} desc={data.contexts[currentItem - 1].desc} img={data.contexts[currentItem - 1]?.img} currentItemId={currentItem} name={displayName} />
        <div className='form-container'>
          {data.contexts[currentItem - 1].formPart}
        </div>
      </div>
    </div>
  );
}


export default App;
