import React from "react";

function TweetInput(props) {
    // 要素にアクセスするための参照を取得
    // ref.currentのデフォルト値はnullにしておく
    // 参照したい要素にJSXの方でこのrefをセットする
    const iconareaRef = React.useRef(null);
    const textareaRef = React.useRef(null);
  
    // Tweetボタンクリック時のコールバック関数を作って保存
    // textareaRef.currentかprops.addTweetが更新されたら
    // コールバック関数を作り直し
    const sendTweet = React.useCallback(() => {
      // refのcurrentに入っている値がDOM
      // 初期値はnull（上で指定した）で、
      // 実際にHTML側に描画されると値が入ります
      if(textareaRef.current) {
        props.addTweet({
          id: new Date().getTime(), // IDはユニークな値にする
          //icon: '😆', // このあたりの値は好きにしてください
          icon: iconareaRef.current.value,
          displayName: 'スマイル',
          accountName: 'mrsmile',
          content: textareaRef.current.value
        });
      }
    }, [textareaRef.current, props.addTweet]);
  
    return (
      <div>
        <div><span>アイコン</span></div>
        <div><textarea className="tweet-textarea" ref={iconareaRef}></textarea></div>
        <div><span>本文</span></div>
        <div><textarea className="tweet-textarea" ref={textareaRef}></textarea></div>
        <div><button onClick={sendTweet} className="send-tweet">Tweetするよ</button></div>
      </div>
    );
  }

  export default TweetInput;
  