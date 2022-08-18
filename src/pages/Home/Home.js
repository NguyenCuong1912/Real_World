import React, { Fragment, useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { getArticles, getArticlesFeed } from '../../redux/actions/ArticlesAction';
import { tagServices } from './../../services/TagServices';
import Articles from '../../components/Articles/Articles';
import HomeCss from './Home.css'
import { getArticlesWithTag } from './../../redux/actions/ArticlesAction';

export default function Home(props) {
    console.log("props", props)
    const dispatch = useDispatch();
    const [listTag, setListTag] = useState([])
    const [tag, setTag] = useState('')
    let { listArticles, articlesFeed, articleTag } = useSelector(state => state.ArticlesReducer)
    // eslint-disable-next-line react-hooks/exhaustive-deps
    useEffect(() => {
        dispatch(getArticles())
        tagServices.getTag().then((res) => {
            setListTag(res.data.tags)
        })
    }, [])

    const handleClickTag = (newTag) => {
        setTag(newTag)
        const tab_pane = document.getElementsByClassName('tab-pane')
        for (let i = 0; i < tab_pane.length; i++) {
            tab_pane[i].classList.remove('show');
            tab_pane[i].classList.remove('active');
        }
        const nav = document.getElementsByClassName('nav-link')
        for (let i = 0; i < nav.length; i++) {
            nav[i].classList.remove('active');
        }
        document.getElementById('tag-tab').classList.remove('hidden')
        document.getElementById('tag').classList.remove('hidden')
        document.getElementById('tag').classList.add('active')
        document.getElementById('tag').classList.add('show')
        document.getElementById('tag-tab').classList.add('active')
        if (newTag !== tag) {
            dispatch(getArticlesWithTag(newTag))
        }

    }
    const handleEvent = (e) => {
        const tab = e.target;
        if (tab.id === 'your-tab') {
            document.getElementById('tag-tab').classList.add('hidden')
            dispatch(getArticlesFeed())
            setTag('')
        } else if (tab.id === 'glb-tab') {
            document.getElementById('tag-tab').classList.add('hidden')
            dispatch(getArticles())
            setTag('')
        }
    }
    const renderTag = () => {
        if (listTag.length > 0) {
            return listTag?.map((tag, index) => {
                return <p onClick={ () => { handleClickTag(tag) } } style={ { cursor: 'pointer' } } className="nav-link tag-pill tag-default" key={ index }>{ tag }</p>
            })
        } else {
            return <div>Loading...</div>
        }
    }
    const renderListArticles = (data, type) => {
        if (data.length > 0) {
            return data.map((articles, index) => {
                return <Articles articles={ articles } type={ type } keyArt={ articles.slug } tag={ tag } />
            })
        } else {
            return <div>Loading Articles...</div>
        }
    }

    return (
        <div>
            <div className="home-page">
                <div className="banner">
                    <div className="container">
                        <h1 className="logo-font">conduit</h1>
                        <p>A place to share your knowledge.</p>
                    </div>
                </div>
                <div className="container page">
                    <div className="row">
                        <div className="col-md-9">
                            <div className="feed-toggle">
                                <div>
                                    <ul className="nav nav-pills outline-active" id="myTab" role="tablist">
                                        <li className="nav-item">
                                            <a onClick={ handleEvent } className="nav-link " id="your-tab" data-toggle="tab" href="#your" role="tab" aria-controls="your" aria-selected="false">Your Feed</a>
                                        </li>
                                        <li className="nav-item">
                                            <a onClick={ handleEvent } className="nav-link active" id="glb-tab" data-toggle="tab" href="#glb" role="tab" aria-controls="glb" aria-selected="true">Global Feed</a>
                                        </li>

                                        <li className="nav-item ">
                                            <a className={ `nav-link hidden` } id="tag-tab" data-toggle="tab" href="#tag" role="tab" aria-controls="tFag" aria-selected="false">{ `# ${tag}` }</a>
                                        </li>
                                    </ul>
                                    <div className="tab-content" id="myTabContent">

                                        <div className="tab-pane" id="your" role="tabpanel" aria-labelledby="your-tab">
                                            { renderListArticles(articlesFeed, 'your') }

                                        </div>
                                        <div className="tab-pane active" id="glb" role="tabpanel" aria-labelledby="glb-tab">
                                            { renderListArticles(listArticles, 'global') }

                                        </div>
                                        <div className="tab-pane" id="tag" role="tabpanel" aria-labelledby="tag-tab">
                                            { renderListArticles(articleTag) }

                                        </div>
                                    </div>
                                    <div style={ { textAlign: 'center' } }>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="col-md-3">
                            <div className="sidebar">
                                <p>Popular Tags</p>
                                <div className="tag-list">
                                    { renderTag() }
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}