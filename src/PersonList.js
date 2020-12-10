export default function PersonList( {people} ){
    return  (
                people.length > 0 ?
                    people.map( person => <li>{person}</li>)  : 
                    "There are no people to list"
            ) 
}