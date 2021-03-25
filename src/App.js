import Hand from "./components/Hand/Hand";
import Table from "./components/Table/Table";
import DevHelper from "./components/DevHelper/DevHelper";
import StoryForm from "./components/StoryForm/StoryForm";
import Story from "./components/Story/Story";
import useStyles from './styles';

function App() {

    const classes = useStyles();

    // useEffect(() => {
    //     getCards();
    // }, []);

    return (
        <div className={classes.dixit}>
            <h1 style={{margin:'0', color:"white", padding:'3rem'}}>Dixit client starts here ;) </h1>
            <StoryForm />
            <Story />
            <Table />
            <Hand />
            <DevHelper />
        </div>
    )
        ;
}

export default App;
