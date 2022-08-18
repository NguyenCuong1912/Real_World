import React, { Fragment, useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Loading from '../../../components/Loading/Loading';
import { getArticleById, updateArticle } from '../../../redux/actions/ArticlesAction';
import ArticleCss from '../CreateArticles/CreateArticles.module.css'
export default function EditArticle(props) {
    const dispatch = useDispatch();
    const { articleId } = props.match.params
    const { detailsArticles } = useSelector(state => state.ArticlesReducer)
    const [listTag, setListTag] = useState(detailsArticles.tagList)
    const [tag, setTag] = useState('')
    const handleKey = (e) => {
        if (e.key === "Enter") {
            e.preventDefault();
            const tag = e.target.value;
            setListTag([...listTag, tag])
            setTag('')
        }
    }
    const handleChange = (e) => {
        setTag(e.target.value)
    }
    const handleRemoveTag = (index) => {
        let newList = [...listTag];
        newList.splice(index, 1)
        setListTag(newList)
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        const form = e.target;
        const article = {
            "article": {
                "title": form.title.value,
                "description": form.description.value,
                "body": form.body.value,
                "tagList": listTag
            }
        }
        dispatch(updateArticle(articleId, article))
    }
    useEffect(() => {
        dispatch(getArticleById(articleId))
    }, [])

    useEffect(() => {
        setListTag(detailsArticles.tagList)
    }, [detailsArticles.tagList])

    const renderTag = () => {
        if (listTag?.length > 0) {
            return listTag.map((tag, index) => {
                return <span className={ArticleCss.tag_span} key={index}>
                    <i onClick={() => { handleRemoveTag(index) }} className='ion-close-round' ></i>{tag}
                </span>
            })
        }
    }
    return (
        <Fragment>
            {detailsArticles.slug === articleId ?
                <div>
                    <div className="editor-page">
                        <div className="container page">
                            <div className="row">
                                <div className="col-md-10 offset-md-1 col-xs-12">
                                    <form onSubmit={handleSubmit}>
                                        <fieldset>
                                            <fieldset className="form-group">
                                                <input id='title' defaultValue={detailsArticles.title} type="text" className="form-control form-control-lg" placeholder="Article Title" />
                                            </fieldset>
                                            <fieldset className="form-group">
                                                <input id='description' defaultValue={detailsArticles.description} type="text" className="form-control" placeholder="What's this article about?" />
                                            </fieldset>
                                            <fieldset className="form-group">
                                                <textarea id='body' className="form-control" rows={8} placeholder="Write your article (in markdown)" defaultValue={detailsArticles.body} />
                                            </fieldset>
                                            <fieldset className="form-group">
                                                <input id='tagList' value={tag} onChange={handleChange} onKeyPress={handleKey} type="text" className="form-control" placeholder="Enter tags" />
                                                <div className="tag-list" >
                                                    {renderTag()}
                                                </div>
                                            </fieldset>
                                            <button className="btn btn-lg pull-xs-right btn-primary" type="submit">
                                                Publish Article
                                            </button>
                                        </fieldset>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                : <Loading></Loading>
            }
        </Fragment>

    )
}
