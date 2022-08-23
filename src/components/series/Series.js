import React from "react"
import axios from 'axios' 
import GlobalStyled from '../../GlobalStyled.js'
import {Container,Title,InfosFilmes,BoxImg,List} from "./SeriesStyled.js"


const MyMovies_api = axios.create({
    baseURL: "https://api.themoviedb.org/3/tv/popular?api_key=eff0ebc6f24060cba1c4ceb8fea3f898&language=en-US&page=1"
})

export default class Series extends React.Component{

    state = {
        movies:[]
    }

    getMovies = async () => {
        const response =  await MyMovies_api.get()
        const infos = response.data.results.map((item) => {
            return{
                nome:item.name,
                sinopse:item.overview,
                imagem:`https://image.tmdb.org/t/p/w400${item.poster_path}`,
                populacao:item.popularity,
                dataLancamento:item.first_air_date,
            }
        })
        this.setState({
            movies:infos
        })
        console.log(response)   
    }

    componentDidMount(){
        this.getMovies()
    }

    render(){
        return(
            <Container>
                 <GlobalStyled/>
                <Title>High Séries:</Title>
                <ul>
                    {this.state.movies.map((item) => (
                        <InfosFilmes>
                        <List>{item.nome}</List>
                        <BoxImg>
                        <img src={item.imagem} alt="poster"/>
                        </BoxImg>
                        <p>{item.sinopse}</p>
                        <p>Popularidade :{item.populacao}</p>
                        <p>Data de lançamento :{item.dataLancamento}</p>
                        </InfosFilmes>
                    ))}
                </ul>   
            </Container>
        )
    }
}