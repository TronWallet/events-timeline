import Logo from './assets/getty.png';

const Config = {
  labelSearch: 'TronWallet <span>Blockchain Explorer</span>',
  title: 'TronWallet Explorer',
  logo: Logo,
  mainCoin: 'TRX',
  welcome: "Welcome to our first front on DevOps Maturity Assessment, we will present some questions to let us estimate how mature is your environment in terms of DevOps and share a brienf insight on it, it will only take a few minutes (< 10 minutes)",
  scalerSteps: [
    {
      title: "Work management",
      questions: [
        {
          label: "Tasks ETA are estimated, accordingly to its complexity (which can be voted by collaborators when created).",
          lowerLabel: "Never",
          higherLabel: "Always"
        },
        {
          label: "Tasks/Epics are prioritized according to business needs (directly assigned by leaders, closer to business assets or in the absence, collaborators)?",
          lowerLabel: "Business Agnostic",
          higherLabel: "In Sync"
        },
        {
          label: "How many, in average, in-progress task a collaborator normally is assigned?",
          lowerLabel: "Over 5",
          higherLabel: "Only 1"
        }
      ]
    },
    {
      title: "Services and Applications",
      questions: [
        {
          label: "Deployed environments are bulletproof to new codes that aren’t successfully tested.",
          lowerLabel: "None",
          higherLabel: "All productive applications"
        },
        {
          label: "All commits are tested, deployed or not.",
          lowerLabel: "None",
          higherLabel: "All productive applications"
        },
        {
          label: "Not only source code is tested, but integrations are too, to ensure reliability.",
          lowerLabel: "None",
          higherLabel: "All productive applications"
        },
        {
          label: "All distributions are stored.",
          lowerLabel: "None",
          higherLabel: "All productive applications"
        },
        {
          label: "Fallbacks can be easily done when needed.",
          lowerLabel: "None",
          higherLabel: "All productive applications"
        },
        {
          label: "All environments are managed by automated pipelines, therefore can be easily recreated.",
          lowerLabel: "None",
          higherLabel: "All productive applications"
        },
        {
          label: "Environment specific behaviors are consequences of external configurations (environment variables or overridable files).",
          lowerLabel: "None",
          higherLabel: "All productive applications"
        }
      ]
    },
    {
      title: "Culture",
      questions: [
        {
          label: "My question?",
          lowerLabel: "my lower label",
          higherLabel: "my higher label"
        }
      ]
    }
  ]
};

export default Config;
