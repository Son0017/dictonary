import React, { useState } from "react";
import { SingleWordStyled, NameStyled, NounStyled, NotFount } from "../styeled";
import linkel from "../../images/link.svg";
import useFetch from "../hooks/useFetch";

function SingleWord({ url, setUrl, mode }) {
  const { data, isPending } = useFetch(
    `https://api.dictionaryapi.dev/api/v2/entries/en/${url}`
  );
  const handlePlay = () => {
    let song = new Audio(data[0].phonetics[1].audio);
    song.play();
  };
  let x = 0;
  return (
    <>
      {isPending && <div>Loading...</div>}
      {data && data.title ? (
        <NotFount>
          <div>😕</div>
          <h1>{data.title}</h1>
          <span>{data.message}</span>
        </NotFount>
      ) : (
        data &&
        data.map((item, i) => {
          return (
            <SingleWordStyled key={Math.random()}>
              {i === 0 && (
                <NameStyled>
                  <div>
                    <h1>{item.word}</h1>
                    {item.phonetics &&
                      item.phonetics.map((phonetic, p) => {
                        if (phonetic.text) {
                          if (p === 0) {
                            x = 1;
                            return (
                              <span key={Math.random()}>{phonetic.text}</span>
                            );
                          } else if (p === 1 && x === 0) {
                            return (
                              <span key={Math.random()}>{phonetic.text}</span>
                            );
                          }
                        }
                      })}
                  </div>

                  <div className="img" onClick={handlePlay}>
                    <div></div>
                  </div>
                </NameStyled>
              )}
              {item.meanings &&
                item.meanings.map((meaning) => {
                  return (
                    <NounStyled key={meaning.partOfSpeech} mode={mode}>
                      <div className="noun">
                        <h1>{meaning.partOfSpeech} </h1>
                        <div className="line"></div>
                      </div>
                      <p>Meaning</p>
                      <ul>
                        {meaning.definitions &&
                          meaning.definitions.map((definition) => {
                            return (
                              <li key={definition.definition}>
                                {definition.definition && (
                                  <span>{definition.definition}</span>
                                )}

                                {definition.example && (
                                  <span className="example">{`"${definition.example}"`}</span>
                                )}
                              </li>
                            );
                          })}
                      </ul>
                      <div className="synonyms">
                        <p>Synonyms</p>
                        {meaning.synonyms &&
                          meaning.synonyms.map((synonym) => {
                            return (
                              <span
                                onClick={() => {
                                  setUrl(synonym);
                                }}
                                key={synonym}
                              >
                                {synonym}
                              </span>
                            );
                          })}
                      </div>
                    </NounStyled>
                  );
                })}
              {i === data.length - 1 && (
                <>
                  <hr />
                  <div className="source">
                    <span>Source</span>
                    <a href={item.sourceUrls}>{item.sourceUrls}</a>
                    <img src={linkel} alt="" />
                  </div>
                </>
              )}
            </SingleWordStyled>
          );
        })
      )}
    </>
  );
}

export default SingleWord;
