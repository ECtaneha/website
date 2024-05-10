import { Typography } from "@mui/material";
import Box from "@mui/material/Box";
import Link from "@mui/material/Link";
import Grid from '@mui/material/Grid';
import Carousel from 'react-material-ui-carousel';
// import ArrowBackIosSharpIcon from '@mui/icons-material/ArrowBackIosSharp';//左矢印アイコン
// import ArrowForwardIosSharpIcon from '@mui/icons-material/ArrowForwardIosSharp';//右矢印アイコン
import job_architect from '../../../public/images/recruit/kobe.jpg';//建築士画像(カルーセルに貼る画像用)

const lColor = 'black';
const bgColor = 'whitesmoke';
const ArrowColor = 'blue';
const ArrowColor_bg = 'white';
const Icon = 'lightskyblue';
const ActiveIcon = 'midnightblue';


export default function Carousel_example(){
  return(
     <Box sx={{pt:8}}>
       <Carousel

         NextIcon='>' //矢印アイコンを別のアイコンに変更
         PrevIcon='<' //矢印アイコンを別のアイコンに変更
         autoPlay = {false} //自動でCarouselを動かすかどうか(true or false)
         //stopAutoPlayOnHover = {true} Carouselの上にマウスを置いている間、自動スクロールを継続するかどうか
         //interval = {4000} 自動でCarouselを動かす時間の間隔(ミリ秒単位)
         //animation = {fade} (fade or slide) Carouselのアニメーションの種類を変更
         //duration = {500} アニメーションの長さを定義
         //swipe = {true} スワイプで動かせるかどうか
         //indicators = {true} インジケーター(下の丸いアイコン)が必要かどうか
         navButtonsAlwaysVisible = {true} //常に矢印アイコンを表示するかどうか
         //navButtonsAlwaysInvisible = {true} //常に矢印アイコンを非表示にするかどうか
         //cycleNavigation = {true} //最後のスライドから「次へ」の矢印アイコンを押した時に最初にスライドに動かせるようにするかどうか
         //fullHeightHover = {true} //次/前のボタンがItem要素の高さ全体をカバーし、ホバー時にボタンを表示するかどうか

        indicatorContainerProps={{
          style: {
            margin: "3px 0px 0px 0px"
          }
        }}
         indicatorIconButtonProps={{//アクティブでない下の丸いアイコンの設定
           style: {
               padding: '10px',//位置調整
               color: Icon,
           }
         }}
         activeIndicatorIconButtonProps={{//アクティブな下の丸いアイコンの設定
           style: {
               color : ActiveIcon,
           }
         }}
         navButtonsWrapperProps={{//矢印ボタン周りの設定
           style: {
             margin: '-20px 15% 0px', //位置調整
           },
         }}
         navButtonsProps = {{//矢印ボタンの設定
           style : {
               color : ArrowColor, //矢印の色
               backgroundColor : ArrowColor_bg,//矢印の背景の色
               borderRadius : 0,//0にすると四角になる．
          },
         }}>
          <Box sx={{mx: 'auto', height: 268, width: 800,backgroundColor:bgColor}}>
            <Grid container direction="row" justifyContent="flex-start" alignItems="flex-start">
              <Box>
                <Typography sx={{ml:12,mt:3}}variant="h5">

                </Typography>
              </Box>
              <Box sx={{height: 268,width: 400,backgroundColor:lColor}}>
                <Box
                  sx={{
                    height: "auto",
                    width: 400
                  }}
                  component="img"
                  src={job_architect}
                  alt="木造建築士"
                ></Box>
              </Box>

            </Grid>
          </Box>
      </Carousel>
    </Box>
  )
}
