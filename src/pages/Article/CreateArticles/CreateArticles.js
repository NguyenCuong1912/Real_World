import React, { useState, useEffect } from 'react'
import ArticleCss from './CreateArticles.module.css'
import { useDispatch } from 'react-redux'
import { createArticles } from '../../../redux/actions/ArticlesAction';
export default function CreateArticles(props) {
    const dispatch = useDispatch();
    const [listTag, setListTag] = useState([])
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
        dispatch(createArticles(article))
    }
    const renderTag = () => {
        if (listTag.length > 0) {
            return listTag.map((tag, index) => {
                return <span className={ArticleCss.tag_span} key={index}>
                    <i onClick={() => { handleRemoveTag(index) }} className='ion-close-round' ></i>{tag}
                </span>
            })
        }
    }
    return (
        <div>
            <div className="editor-page">
                <div className="container page">
                    <div className="row">
                        <div className="col-md-10 offset-md-1 col-xs-12">
                            <form onSubmit={handleSubmit}>
                                <fieldset>
                                    <fieldset className="form-group">
                                        <input id='title' type="text" className="form-control form-control-lg" placeholder="Article Title" />
                                    </fieldset>
                                    <fieldset className="form-group">
                                        <input id='description' type="text" className="form-control" placeholder="What's this article about?" />
                                    </fieldset>
                                    <fieldset className="form-group">
                                        <textarea id='body' className="form-control" rows={8} placeholder="Write your article (in markdown)" defaultValue={""} />
                                    </fieldset>
                                    <fieldset className="form-group">
                                        <input id='tagList' value={tag} onChange={handleChange} onKeyPress={handleKey} type="text" className="form-control" placeholder="Enter tags" />
                                        <div className="tag-list" style={{ marginTop: '3px' }} >
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
    )
}
