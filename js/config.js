/*
Welcome to the config.js file
It holds the actual content of chapters, the transitions, and other
important information for the storymap.
########################################################################
Contents:
*/

/*
########################################################################
HEADER SECTION
*/
let topTitleDiv = "<h4>Research | Public Report</h4>";
let titleDiv = `<h1>What makes a city to fail?</h1> <p style="font-size:18px; line-height:1px"><i>Understanding fiscal vulnerabilities and risks from local government finance</i></p> <br>`;
let bylineDiv = `<p style="font-size:15px;line-height:25px">Emily Tianyuan Wang<br>PhD Candidate at University of Cambridge, UK</p>`;
let descriptionDiv = `
<p style="text-align:justify">What does it mean for a city to fall into bankruptcy? It is rare for a local government to go bankrupt but a turbulent 2023 has raised this question into the spotlight: In China, a number of cities struggling to repay their mounting debts; in the UK, Birmingham and many other councils have already officially declared effective bankruptcy. </p> 
<p style="text-align:justify"> Recognizing this phenomenon is not unique but rather a global occurrence, this essay delves into three key inquires: 1) what would happen when a city fails financially; 2) what causes such financial failures, and 3) what could cities do. Through a case study of China, marked by rapid urbanization and unprecedented economic growth but also a mounting debt crisis, this essay draws lessons from the past with the aim of laying a foundation to inform future planning and policymaking in sustainable urban development.</p>
<p><br></p>
<div style="max-width:100%; text-align:center; margin-left:auto; margin-right:auto">
  <img src="./data/images/city.jpeg" alt="Image caption" style="max-width:75%; height:auto;">
</div>
<p><br></p>
<p style="text-align:center">Scroll to continue<br>▼</p>
`;



/*
########################################################################
CHAPTERS
*/

let divChapter0 =`
<h3 style="text-align:center; font-size:25px"> 1. What would happen when a city fail financially?</h3>
`;

let divChapter1 =`
<p><b>a. Impacts on residents:</b></p> 
<p style="text-align:left;font-size:14px; line-height:20px;"><b>Severe public services cut.</b> In the UK, Birmingham has announced £300 million cuts of local services in early 2024, echoing similar measures in other bankruptcy cities like Nottingham. These cuts hit services include reductions in funding for vital youth programs, a matter of paramount concern for parents; arts budgets have been slashed; and streetlights have been switched off, etc., as reported by The Guardian News (2023). Examples in other countries including Yubari, Japan, show that bankruptcy leads to a sharp decline in public sector jobs and spending (Mabon & Shih, 2018). There is also an interesting argument that, city growth does not guarantee improved services; rather, if local governments exhaust funds, service quality inevitably suffers. Residents life experience may undergo dramatic change.</p> 
<p></p> 
<p></p>
`;

let divChapter1_1b =`
<p style="text-align:left;font-size:14px; line-height:20px;"><b>The potential burden of higher taxes and fees, as well as lower personal disposable income.</b> Residents may also face increased tax burdens, as seen in Birminghams council tax hike of 21% over the next two years from 2024 to 2026 (BBC News, 2024), other bankruptcy councils also raised the council tax significantly including 15% rise in Croydon (BBC News, 2023) and 9.99% rise in Slough in 2023/2024 (Slough Borough Council, 2023), exacerbating financial strain on households. Especially, such cost may deepen the burden on the working class, exacerbating social disparities between different socioeconomic groups. Recent study also found a significant relationship between local government financial sustainability and the overall residents satisfaction, emphasizing the tangible impact on residents’ lives (Tran & Dollery, 2023).</p> 
<p></p> 
<p></p>
`;

let divChapter1_2 =`
<p><b>b. Impacts on the city:</b></p> 
<p style="text-align:left;font-size:14px; line-height:20px;"> <b>Less population and workforce.</b> A significant concern for local governments, unlike their national counterparts, is the ease of labour mobility within countries (Glaeser, 2013). Consequently, cities facing financial distress may witness a rapid exodus of residents seeking better opportunities elsewhere, leading to a decline in both the city’s workforce and the associated tax revenue base. Examples such as Detroit in the USA, burdened with a staggering debt of 18.5 billion USD, the departure of young and affluent residents to other cities has severely hampered productivity and tax revenues (McDonald, 2014), exacerbating the city’s financial woes. Similarly, in Yubari, Japan, the aftermath of bankruptcy witnessed a significant decline in population, plummeting from 116,908 in 1960 to 6,374 people in 2024 (a drop of 94.5%) (Source: Yubari City Statistical Book), further complicating the city’s economic predicament. Moreover, the loss of skilled labour compounds the issue by eroding productivity, perpetuating a cycle of economic decline. </p> 
<p></p> 
<p></p>
`;

let divChapter1_2b =`
<p style="text-align:left;font-size:14px; line-height:20px;"><b>Creditworthiness and city reputation.</b> Once the credit risk of the city looms large, that bankruptcy cities would face creditworthiness plummets, making it increasingly difficult to borrow funds and attract external investments for future initiatives. Reduced public services and deteriorating infrastructure tarnish the reputation of the city, deterring potential investors and residents. The ensuing cycle of decline perpetuates a vicious cycle, further eroding the city’s resilience and vitality.</p> 
<p></p> 
<p></p>
`;

let divChapter1_3 =`
<p><b>c. Impacts on the country/nation:</b></p> 
<p style="text-align:left;font-size:14px; line-height:20px;"> <b>Systemic Risk.</b> From a country/national perspective, localized crises may be able to spur competitionand innovation, prompting struggling cities to enact reforms and innovative policies to revitalize theireconomies. However, when multiple cities experience financial failures simultaneously, it poses significant systemic risks, threatening national stability. The cross-industry links exacerbate theimpact of city financial failures, leading to reduced public services, government layoffs, and deteriorating infrastructure. These factors collectively dampen economic activity, diminish consumer confidence, and erode investor trust, heightening the risk of broader economic downturns andsystemic crises. Additionally, the failure of one city can exert pressure on others, amplifying the riskacross the nation.</p> 
<p></p>
`;

let divChapter2 =`
<h3 style="text-align:center; font-size:25px"> 2. What causes the current financial failure?</h3>
`;

let divChapter2_1 =`
<p><b>Trigger 1: The marginal return from infrastructure (fixed-assets) investments is decreasing</b></p>
<p>Over the past decades, it is essential to recognize that infrastructure-led economic growth has been adriving force behind China’s impressive economic expansion, fuelling substantial increases in GDP.By utilizing debt to invest in infrastructure, local governments have boosted land values and generatedsignificant tax revenues, thus stimulating overall economic activity. This trend was particularly pronounced from the late 20th century to the early 21st century, when rapid urbanization necessitatedextensive construction of roads, bridges, ports, and other vital infrastructure services.</p>
<img src="./data/images/trigger1.png" alt="Image caption" style="max-width:100%; height:auto;">
`;

let divChapter2_2 =`
<p><b>Trigger 2: Re-structure of real estate market.</b></p>
<p>The re-structure of real estate market in recent years further added the burden to local governments. In the context of China, local governments have been increasing reliance on landrelated revenue, having a close link with real estate market through 1) selling land-use rights, and 2) real estate tax revenue.</p>
<img src="./data/images/trigger2.png" alt="Image caption" style="max-width:100%; height:auto;">
<p style="text-align:left;font-size:10px; line-height:20px;"><em>Figure Source:https://www.piie.com/research/piie-charts/local-governments-china-rely-heavily-land-revenue</em></p>
`;

let divChapter2_3 =`
<p><b>Trigger 3: GDP-orientated cadre evaluation system</b></p>
<p>Since the economic reform in the 1980s, greater weight has been put on local economic growth, asmeasured by the local GDP growth rate. This results in a GDP-orientated cadre evaluation system inChinese local government. It should be acknowledged that, the decentralised/devolution of power hasindeed encouraged positive competition mechanism between cities, which is one of the condition for the success in the 2000s decade.</p>
`;



let divChapter3 =`
<h3 style="text-align:center; font-size:25px"> 3. To Minimise the Risk: What could cities do? </h3>
`;

let divChapter3_1 =`
<p><b>a. Recognise the heterogeneous needs between cities</b></p>
<p>Infrastructure investment cannot always be the ‘trick’ to spur economic growth – it should align withlocal needs and with cautious assessment. One significant lesson learned from China’s experience isthe necessity of exercising caution when investing in infrastructure projects. It is vital to acknowledgethat infrastructure needs vary among cities. Unlike in the past, with most cities in China are under-supplied for the infrastructure services, as time progresses, it is crucial to highlight that infrastructure demand varies across cities. The rapidly growing cities often require keep significant investment continually support their expansion, while smaller or less developed cities may not have the samelevel of expansion investment, especially if their existing infrastructure meets current needssufficiently. Over-supplying infrastructure in areas where it is not needed can lead to a decreasing ofmarginal return from infrastructure and fixed assets, making it further difficult for local governments to repay debts incurred from these investments. Therefore, cities must carefully assess the genuinedemand for infrastructure before committing to large-scale projects based on their own situations.This lesson underscores the importance of aligning investment decisions with real market demandsto ensure financial sustainability and avoid the risk of debt accumulation beyond manageable levels.In short, cities shall recognize their unique differences. Simply adopting successful strategies fromother cities may not yield the same results, though this is currently the approach adopted by mostcities worldwide.</p>
`;

let divChapter3_2 =`
<p><b>b. Re-think: What is a ‘good performing’ city?</b></p>
<p><b>More indicators for the promotion evaluation system to enhance far-sighted action.</b> On the leadership front, to foster a long-term/far-sighted action in city governance, it is encouragedto expand the evaluation criteria beyond a narrow reliance on GDP growth. The GDP-orientated evaluation system may effectively drive quick economic expansion by incentivizing local leaders toleverage resources for immediate gains in short term, but its sustainability over time poses considerable challenges. Additionally, GDP is a highly aggregate term for measuring economic output,which may be inflated by debts and subject to data manipulation concerns in the particular context.Diversifying evaluation criteria with indicators such as tax revenue and job creation promotes economic stability and sustainable development. Prioritizing these indicators informs policydecisions to enhance resilience and productivity. This shift aligns city governance with goals offinancial sustainability and equitable development, boosting competitiveness and resilience againstevolving challenges.</p>
`;

let divChapter3_2b =`
<p><b>Shift the focus from one-off income to more long-term sustainable revenue</b> To mitigate debt dependency, in the case of China, cities are also encouraged to diversify their revenuestreams, moving away from heavy reliance on land-related revenue towards more sustainable sourcessuch as corporate and personal tax revenue. Exploring alternative revenue streams like tourism andbusiness taxes is essential for reducing vulnerability to economic fluctuations. By broadening therevenue base, cities can enhance their financial resilience and better withstand market uncertainties.Additionally, fostering job growth is crucial, as it not only boosts productivity but also contributes toa more stable economic base. In other words, to increase tax income, assuming constant tax rate,increasing jobs and/or improving labour productivity are instrumental.</p>
`;

let divChapter4 =`
<p style="font-size:21px"><b>CONCLUSION</b></p>
<p>In conclusion, we underscore the criticality of ensuring financial stability at the local government level, shedding light on the diverse manifestations of city-level financial failure and the associated risks. The narrative pivots around a central issue: the mismatch between debt allocationfor infrastructure investment and the actual demand for such development varies across cities. This highlights the necessity of addressing the inherent heterogeneity among urban centres, recognizing that while some cities may benefit from expansion, others may not. Some less developed cities mayalready face under-utilization issues. However, this endeavour is impeded by entrenched challenges,including the heavy reliance on real estate-linked revenue streams and predominant GDP-orientatedcadre evaluation system.</p>
<p>To navigate these complexities and mitigate the risks of financial instability, this essay draws two keylessons from the past. Firstly, given the heterogeneous needs among cities, a cautious assessment ofadditional infrastructure investment is crucial to prevent oversupply and underutilization. This lesson may seem straightforward, but it necessitates a deep understanding of the diverse economic and developmental trajectories across different cities. Secondly, cities are encouraged to re-think what is a ‘good performing’ city, recognizing that solely defined by GDP indicators is not enough. Long-term indicators such as job creation and local government revenue, which reflect the pocket money available to local governments, are encouraged to be included in the assessment. In the case of China,a fundamental shift in perspective is imperative, from short-term gains focused on one-off land-related revenue towards sustainable sources of income generation. Prioritizing long-term actions suchas fostering job creation and generating personal and corporate tax revenues not only enhances fiscal resilience but also catalyses broader economic growth and prosperity.</p>
`;

let divChapter4_1 =`
<p>To navigate these complexities and mitigate the risks of financial instability, this essay draws two key lessons from the past. Firstly, given the heterogeneous needs among cities, a cautious assessment ofadditional infrastructure investment is crucial to prevent oversupply and under utilization. This lessonmay seem straightforward, but it necessitates a deep understanding of the diverse economic and developmental trajectories across different cities. Secondly, cities are encouraged to re-think what is a ‘good performing’ city, recognizing that solely defined by GDP indicators is not enough. Long-term indicators such as job creation and local government revenue, which reflect the pocket money available to local governments, are encouraged to be included in the assessment. In the case of China,a fundamental shift in perspective is imperative, from short-term gains focused on one-off land-related revenue towards sustainable sources of income generation. Prioritizing long-term actions suchas fostering job creation and generating personal and corporate tax revenues not only enhances fiscal resilience but also catalyses broader economic growth and prosperity.</p>
`;

/*
########################################################################
FOOTER SECTION
*/

let footerDiv = `
<p>Reference: Credits to Juan Francisco Saldarriaga (PointsUnknown) for the storymap template: <a href="https://github.com/PointsUnknown/PointsUnknown.github.io">https://github.com/PointsUnknown/PointsUnknown.github.io</a> </p>
`;

/*
########################################################################
MAP AND TRANSITIONS - THE MAIN CONFIGURATION SECTION
*/

var config = {
    // // Change the map style here
    style: "mapbox://styles/mapbox/light-v11",

    // // Replace this with your own Mapbox token!
    // accessToken: "pk.eyJ1IjoiYnlyb25ubiIsImEiOiJjbTE1c2M5ZGswYmRxMnRvbnl0Mmw1NDFiIn0.jWMkIPu68E9-Bezda3lAlQ",

    // style: "mapbox://styles/tw531/cm45utssv013c01sdazbs8kcr",
    accessToken: "pk.eyJ1IjoidHc1MzEiLCJhIjoiY200NXUwdnN2MTRmZTJrczdiZjV5bWNwciJ9.-K0Q1NYz3qiQWqOH5lCjfQ",


    showMarkers: false,
    markerColor: "#242422",
    theme: "light",
    use3dTerrain: false,
    topTitle: topTitleDiv,
    title: titleDiv,
    byline: bylineDiv,
    description: descriptionDiv,
    footer: footerDiv,
    chapters: [

      // CHAPTER 0
      // ################################################################
      {
        id: "view0",
        alignment: "full",
        hidden: false,
        chapterDiv: divChapter0,
        location: {center: [-1.898575, 52.489471],zoom: 5,zoomSmall: 9,pitch: 0,bearing: 0,},
        mapAnimation: "flyTo",
        rotateAnimation: false,
        callback: "",
        onChapterEnter: [
            {layer: "your_line_layer",opacity: 1,duration: 300,},
            {layer: "your_points_layer",opacity: 0,duration: 300,},
            {layer: "your_polygons_layer",opacity: 0,duration: 300,},
        ],
        onChapterExit: [
            {layer: "your_line_layer",opacity: 1,duration: 300,},
            {layer: "your_points_layer",opacity: 0,duration: 300,},
            {layer: "your_polygons_layer",opacity: 0,duration: 300,},
          ],
        },

      
      // CHAPTER 1
      // ################################################################
      {
        id: "view1",
        alignment: "left",
        hidden: false,
        chapterDiv: divChapter1,
        location: {
        //   center: [103.845436, 1.369115], // default center
        //   center: [116.383331, 39.916668],
          center: [-1.898575, 52.489471],
          zoom: 5,zoomSmall: 9,pitch: 0,bearing: 0,
        },
        mapAnimation: "flyTo",
        rotateAnimation: false,
        callback: "",
        onChapterEnter: [
            {layer: "your_line_layer",opacity: 1,duration: 300,},
            {layer: "your_points_layer",opacity: 0,duration: 300,},
            {layer: "your_polygons_layer",opacity: 0,duration: 300,},
        ],
        onChapterExit: [
            {layer: "your_line_layer",opacity: 1,duration: 300,},
            {layer: "your_points_layer",opacity: 0,duration: 300,},
            {layer: "your_polygons_layer",opacity: 0,duration: 300,},
          ],
        },


      // CHAPTER 1_1b
      // ################################################################
      {
        id: "view1_1b",
        alignment: "right",
        hidden: false,
        chapterDiv: divChapter1_1b,
        location: {
        //   center: [103.845436, 1.369115], // default center, longitude, then latitude
        //   center: [116.383331, 39.916668], //Beijing
          center: [-1.898575, 52.489471],
          zoom: 5,zoomSmall: 9,pitch: 0,bearing: 0,
        },
        mapAnimation: "flyTo",
        rotateAnimation: false,
        callback: "",
        onChapterEnter: [
            {layer: "your_line_layer",opacity: 1,duration: 300,},
            {layer: "your_points_layer",opacity: 0,duration: 300,},
            {layer: "your_polygons_layer",opacity: 0,duration: 300,},
        ],
        onChapterExit: [
            {layer: "your_line_layer",opacity: 1,duration: 300,},
            {layer: "your_points_layer",opacity: 0,duration: 300,},
            {layer: "your_polygons_layer",opacity: 0,duration: 300,},
          ],
        },


      // CHAPTER 1-2
      // ################################################################
      {
        id: "view1_2",
        alignment: "left",
        hidden: false,
        chapterDiv: divChapter1_2,
        location: {
        //   center: [103.845436, 1.369115], // default center
        //   center: [116.383331, 39.916668],
          center: [-1.898575, 52.489471],
          zoom: 7,zoomSmall: 9,pitch: 0,bearing: 0,
        },
        mapAnimation: "flyTo",
        rotateAnimation: false,
        callback: "",
        onChapterEnter: [
            {layer: "your_line_layer",opacity: 1,duration: 300,},
            {layer: "your_points_layer",opacity: 0,duration: 300,},
            {layer: "your_polygons_layer",opacity: 0,duration: 300,},
        ],
        onChapterExit: [
            {layer: "your_line_layer",opacity: 1,duration: 300,},
            {layer: "your_points_layer",opacity: 0,duration: 300,},
            {layer: "your_polygons_layer",opacity: 0,duration: 300,},
          ],
        },

      // CHAPTER 1-2b
      // ################################################################
      {
        id: "view1_2",
        alignment: "right",
        hidden: false,
        chapterDiv: divChapter1_2b,
        location: {
        //   center: [103.845436, 1.369115], // default center
          center: [116.383331, 39.916668],
          zoom: 9,zoomSmall: 9,pitch: 0,bearing: 0,
        },
        mapAnimation: "flyTo",
        rotateAnimation: false,
        callback: "",
        onChapterEnter: [
            {layer: "your_line_layer",opacity: 1,duration: 300,},
            {layer: "your_points_layer",opacity: 0,duration: 300,},
            {layer: "your_polygons_layer",opacity: 0,duration: 300,},
        ],
        onChapterExit: [
            {layer: "your_line_layer",opacity: 1,duration: 300,},
            {layer: "your_points_layer",opacity: 0,duration: 300,},
            {layer: "your_polygons_layer",opacity: 0,duration: 300,},
          ],
        },


      // CHAPTER 1-3
      // ################################################################
      {
        id: "view1_3",
        alignment: "left",
        hidden: false,
        chapterDiv: divChapter1_3,
        location: {
        //   center: [103.845436, 1.369115], // default center
        //   center: [116.383331, 39.916668],
          center: [2.5, 52.489471],
          zoom: 5,zoomSmall: 9,pitch: 0,bearing: 0,
        },
        mapAnimation: "flyTo",
        rotateAnimation: false,
        callback: "",
        onChapterEnter: [
            {layer: "your_line_layer",opacity: 1,duration: 300,},
            {layer: "your_points_layer",opacity: 0,duration: 300,},
            {layer: "your_polygons_layer",opacity: 0,duration: 300,},
        ],
        onChapterExit: [
            {layer: "your_line_layer",opacity: 1,duration: 300,},
            {layer: "your_points_layer",opacity: 0,duration: 300,},
            {layer: "your_polygons_layer",opacity: 0,duration: 300,},
          ],
        },



        // CHAPTER 2
        // ################################################################
        {
        id: "view2",
        alignment: "full",
        hidden: false,
        title: "",
        image: "",
        description: "",
        chapterDiv: divChapter2,
        location: {
          center: [116.383331, 39.916668],
          // [2.5, 52.489471], 
          zoom: 5,
          zoomSmall: 5,
          pitch: 0,
          bearing: 0,
        },
        mapAnimation: "flyTo",
        rotateAnimation: false,
        callback: "",
        onChapterEnter: [
            {layer: "your_line_layer",opacity: 1,duration: 300,},
            {layer: "your_points_layer",opacity: 0,duration: 300,},
            {layer: "your_polygons_layer",opacity: 0,duration: 300,},
        ],
        onChapterExit: [
            {layer: "your_line_layer",opacity: 1,duration: 300,},
            {layer: "your_points_layer",opacity: 0,duration: 300,},
            {layer: "your_polygons_layer",opacity: 0,duration: 300,},
        ],
        },



        // CHAPTER 2-1
        // ################################################################
        {
          id: "view2_1",
          alignment: "left",
          hidden: false,
          title: "",
          image: "",
          description: "",
          chapterDiv: divChapter2_1,
          location: {
            center: [116.383331, 39.916668],
            // [2.5, 52.489471], 
            zoom: 5,
            zoomSmall: 5,
            pitch: 0,
            bearing: 0,
          },
          mapAnimation: "flyTo",
          rotateAnimation: false,
          callback: "",
          onChapterEnter: [
              {layer: "your_line_layer",opacity: 1,duration: 300,},
              {layer: "your_points_layer",opacity: 0,duration: 300,},
              {layer: "your_polygons_layer",opacity: 0,duration: 300,},
          ],
          onChapterExit: [
              {layer: "your_line_layer",opacity: 1,duration: 300,},
              {layer: "your_points_layer",opacity: 0,duration: 300,},
              {layer: "your_polygons_layer",opacity: 0,duration: 300,},
          ],
          },

          


        // CHAPTER 2-2
        // ################################################################
        {
          id: "view2_2",
          alignment: "left",
          hidden: false,
          title: "",
          image: "",
          description: "",
          chapterDiv: divChapter2_2,
          location: {
            center: [116.383331, 39.916668],
            // [2.5, 52.489471], 
            zoom: 5,
            zoomSmall: 5,
            pitch: 0,
            bearing: 0,
          },
          mapAnimation: "flyTo",
          rotateAnimation: false,
          callback: "",
          onChapterEnter: [
              {layer: "your_line_layer",opacity: 1,duration: 300,},
              {layer: "your_points_layer",opacity: 0,duration: 300,},
              {layer: "your_polygons_layer",opacity: 0,duration: 300,},
          ],
          onChapterExit: [
              {layer: "your_line_layer",opacity: 1,duration: 300,},
              {layer: "your_points_layer",opacity: 0,duration: 300,},
              {layer: "your_polygons_layer",opacity: 0,duration: 300,},
          ],
          },

          



        // CHAPTER 2-3
        // ################################################################
        {
          id: "view2_3",
          alignment: "left",
          hidden: false,
          title: "",
          image: "",
          description: "",
          chapterDiv: divChapter2_3,
          location: {
            center: [113.253250, 23.128994],
            // [2.5, 52.489471], 
            zoom: 5,
            zoomSmall: 5,
            pitch: 0,
            bearing: 0,
          },
          mapAnimation: "flyTo",
          rotateAnimation: false,
          callback: "",
          onChapterEnter: [
              {layer: "your_line_layer",opacity: 1,duration: 300,},
              {layer: "your_points_layer",opacity: 0,duration: 300,},
              {layer: "your_polygons_layer",opacity: 0,duration: 300,},
          ],
          onChapterExit: [
              {layer: "your_line_layer",opacity: 1,duration: 300,},
              {layer: "your_points_layer",opacity: 0,duration: 300,},
              {layer: "your_polygons_layer",opacity: 0,duration: 300,},
          ],
          },
  




        // CHAPTER 3
        // ################################################################
        {
          id: "view3",
          alignment: "full",
          hidden: false,
          title: "",
          image: "",
          description: "",
          chapterDiv: divChapter3,
          location: {
            center: [113.253250, 23.128994], 
            zoom: 5,
            zoomSmall: 5,
            pitch: 0,
            bearing: 0,
          },
          mapAnimation: "flyTo",
          rotateAnimation: false,
          callback: "",
          onChapterEnter: [
              {layer: "your_line_layer",opacity: 1,duration: 300,},
              {layer: "your_points_layer",opacity: 0,duration: 300,},
              {layer: "your_polygons_layer",opacity: 0,duration: 300,},
          ],
          onChapterExit: [
              {layer: "your_line_layer",opacity: 1,duration: 300,},
              {layer: "your_points_layer",opacity: 0,duration: 300,},
              {layer: "your_polygons_layer",opacity: 0,duration: 300,},
          ],
          },
  
  
  
  
          // CHAPTER 3_1
          // ################################################################
          {
            id: "view3_1",
            alignment: "full",
            hidden: false,
            title: "",
            image: "",
            description: "",
            chapterDiv: divChapter3_1,
            location: {
            //   center: [103.723416, 1.332541], // zoom here!
            //   center: [116.383331, 39.916668],
              center: [113.253250, 23.128994], 
              zoom: 5,
              zoomSmall: 5,
              pitch: 0,
              bearing: 0,
            },
            mapAnimation: "flyTo",
            rotateAnimation: false,
            callback: "",
            onChapterEnter: [
                {layer: "your_line_layer",opacity: 1,duration: 300,},
                {layer: "your_points_layer",opacity: 0,duration: 300,},
                {layer: "your_polygons_layer",opacity: 0,duration: 300,},
            ],
            onChapterExit: [
                {layer: "your_line_layer",opacity: 1,duration: 300,},
                {layer: "your_points_layer",opacity: 0,duration: 300,},
                {layer: "your_polygons_layer",opacity: 0,duration: 300,},
            ],
            },
  
  
  
  
          // CHAPTER 3_2
          // ################################################################
          {
              id: "view3_2",
              alignment: "left",
              hidden: false,
              title: "",
              image: "",
              description: "",
              chapterDiv: divChapter3_2,
              location: {
              //   center: [103.845436, 1.369115], 
                center: [113.253250, 23.128994], // zoom here!
              //   center: [116.383331, 39.916668],
                zoom: 5,
                zoomSmall: 5,
                pitch: 0,
                bearing: 0,
              },
              mapAnimation: "flyTo",
              rotateAnimation: false,
              callback: "",
              onChapterEnter: [
                  {layer: "your_line_layer",opacity: 1,duration: 300,},
                  {layer: "your_points_layer",opacity: 0,duration: 300,},
                  {layer: "your_polygons_layer",opacity: 0,duration: 300,},
              ],
              onChapterExit: [
                  {layer: "your_line_layer",opacity: 1,duration: 300,},
                  {layer: "your_points_layer",opacity: 0,duration: 300,},
                  {layer: "your_polygons_layer",opacity: 0,duration: 300,},
              ],
            },
          
  
          // CHAPTER 3_2b
          // ################################################################
          {
              id: "view3_2b",
              alignment: "right",
              hidden: false,
              title: "",
              image: "",
              description: "",
              chapterDiv: divChapter3_2b,
              location: {
              //   center: [103.845436, 1.369115], 
                center: [113.253250, 23.128994], // zoom here!
                zoom: 5.5,
                zoomSmall: 5.5,
                pitch: 0,
                bearing: 0,
              },
              mapAnimation: "flyTo",
              rotateAnimation: false,
              callback: "",
              onChapterEnter: [
                  {layer: "your_line_layer",opacity: 1,duration: 300,},
                  {layer: "your_points_layer",opacity: 0,duration: 300,},
                  {layer: "your_polygons_layer",opacity: 0,duration: 300,},
              ],
              onChapterExit: [
                  {layer: "your_line_layer",opacity: 1,duration: 300,},
                  {layer: "your_points_layer",opacity: 0,duration: 300,},
                  {layer: "your_polygons_layer",opacity: 0,duration: 300,},
              ],
            },          


          // CHAPTER 4
          // ################################################################
          {
            id: "view4",
            alignment: "full",
            hidden: false,
            title: "",
            image: "",
            description: "",
            chapterDiv: divChapter4,
            location: {
            //   center: [103.845436, 1.369115], 
              center: [113.253250, 23.128994], // zoom here!
              zoom: 3,
              zoomSmall: 5,
              pitch: 0,
              bearing: 0,
            },
            mapAnimation: "flyTo",
            rotateAnimation: false,
            callback: "",
            onChapterEnter: [
                {layer: "your_line_layer",opacity: 1,duration: 300,},
                {layer: "your_points_layer",opacity: 0,duration: 300,},
                {layer: "your_polygons_layer",opacity: 0,duration: 300,},
            ],
            onChapterExit: [
                {layer: "your_line_layer",opacity: 1,duration: 300,},
                {layer: "your_points_layer",opacity: 0,duration: 300,},
                {layer: "your_polygons_layer",opacity: 0,duration: 300,},
            ],
          },
        


    ]};