import React from 'react';
import {browserHistory} from 'react-router';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';

class Navbar extends React.Component{
	
	render(){
		
		return(<Router history='browserHistory'><div>
					<nav className="navbar navbar-inverse navbar-static-top" role="navigation">
						<div className="container">
						 <div className="navbar-header">
							<button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1">
								<span className="sr-only">Toggle navigation</span>
								<span className="icon-bar"></span>
								<span className="icon-bar"></span>
								<span className="icon-bar"></span>
							</button>							
						</div>
						<a className="navbar-brand" rel="home" href="/home" title="Buy Sell Rent Everyting"><img
             src="images/foodlogo.png" /></a>
						<div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
						  <ul className="nav navbar-nav">
							<li><Link to="/home">Home</Link></li>
							<li><Link to="/about">About</Link></li>
							<li><Link to="/tips">Tips</Link></li>
							<li><Link to="/savefood">Save Food</Link></li>
							<li><Link to="/contact">Contact Us</Link></li>
						</ul>
						</div>
					  </div>
					</nav>					
						<Route exact path="/" component={Home}/>
						<Route path="/home" component={Home}/>
						<Route path="/about" component={About}/>
						<Route path="/tips" component={Tips}/>
						<Route path="/savefood" component={SaveFood}/>	
						<Route path="/contact" component={ContactUs}/>
					</div>
				</Router>					
			 );
	};	
}
const Home = ()=> (
		<div className="container-fluid-box">	
			<div className="container_carousel"> 
			  <div id="myCarousel" className="carousel slide" data-ride="carousel">
				<ol className="carousel-indicators">
				  <li data-target="#myCarousel" data-slide-to="0" className="active"></li>
				  <li data-target="#myCarousel" data-slide-to="1"></li>
				  <li data-target="#myCarousel" data-slide-to="2"></li>
				  <li data-target="#myCarousel" data-slide-to="3"></li>
				  <li data-target="#myCarousel" data-slide-to="4"></li>
				  <li data-target="#myCarousel" data-slide-to="5"></li>
				</ol>
				<div className="carousel-inner">
				  <div className="item active">
					<img src="images/slide1.jpg" alt="Los Angeles"  />
					<div className="carousel-caption-cust"><h3>SAVE FOOD</h3><p>At the international SAVE FOOD Congress on 4 May 2017 speakers from business, science and political spheres and civil society got together to shed some light on the various facets of the food waste problem.</p></div>
				 </div>

				  <div className="item">
					<img src="images/slide2.jpg" alt="Chicago" />
					<div className="carousel-caption-cust"><h3>Presentation of the SAVE FOOD Study in India</h3><p>Between May and July 2016 the Food and Agriculture Organisation of the United Nations (FAO) carried out extensive studies on food losses in various areas of India. This was made possible by the contributions made by members of the SAVE FOOD Initiative.</p></div>
				  </div>
				
				  <div className="item">
					<img src="images/slide3.jpg" alt="New york"  />
					<div className="carousel-caption-cust"><h3>Success Formula</h3><p>Commitment, stamina and a shared goal: these are the “ingredients” that SAVE FOOD and Azuri Health have mixed to produce tasty dried mangoes.</p></div>
				  </div>
				  
				  <div className="item">
					<img src="images/slide4.jpg" alt="New york"  />
					<div className="carousel-caption-cust"><h3>Bests Rests</h3><p>“Clean your plate!” is passé: a project to curb food waste makes the doggy bag acceptable with the “Beste-Reste-Box”.</p></div>
				  </div>
				  
				  <div className="item">
					<img src="images/slide5.jpg" alt="New york"  />
					<div className="carousel-caption-cust"><h3>Perfectly imperfect</h3><p>At the international SAVE FOOD Congress on 4 May 2017 speakers from business, science and political spheres and civil society got together to shed some light on the various facets of the food waste problem.</p></div>
				  </div>
				  
				  <div className="item">
					<img src="images/slide6.jpg" alt="New york"  />
					<div className="carousel-caption-cust"><h3>Expired, but still fine</h3><p>While the European Union is still debating the best-before date, a clever guy in Yorkshire has set up a flourishing enterprise, selling food which is past that date.</p></div>
				  </div>
				</div>
				
				<a className="left carousel-control" href="#myCarousel" data-slide="prev">
				  <span className="glyphicon glyphicon-chevron-left"></span>
				  <span className="sr-only">Previous</span>
				</a>
				
				<a className="right carousel-control" href="#myCarousel" data-slide="next">
				  <span className="glyphicon glyphicon-chevron-right"></span>
				  <span className="sr-only">Next</span>
				</a>
			  </div>
			</div>
			<div className="video-container-outer">
				<p className="quote">A child <span className="red">dies</span> every <span className="red">5</span> secconds as a result of <span className="red">hunger</span><br/><span className="big-head">DON'T WASTE FOOD</span></p>
				<div className="video-container">
					<iframe className="iframe_class" width="100" height="100"  align="middle" frameborder="10" src="https://www.youtube.com/embed/um5LZzT8Wh8"></iframe>
				</div>
			</div>
			<div className="text-container-outer">	
			  <div className="container-level1">
				<h2 className="container-head">Which countries waste the most food?</h2>
				<div className="center"><div className="center-img-home"><img src="images/market.jpg" alt="food"/></div></div>
				<p className="text-center">With the world’s population projected to reach 9.6 billion by 2050, and with most of this growth taking place in the developing world (more than half of it in Africa), the challenge for governments around the world is, how do we produce enough food for everyone?</p>
				<p className="text-center">The answer, according to the United Nations, is not to produce more food, but to stop wasting so much of what we already have.</p>
				<p className="text-center">The Food and Agriculture Organization of the United Nations (FAO) estimates that, each year, one-third of all food produced for human consumption in the world (around 1.3 billion tons) is lost or wasted. This includes 45% of all fruit and vegetables, 35% of fish and seafood, 30% of cereals, 20% of dairy products and 20% of meat.</p>
				<p className="text-center">Not surprisingly, most of this wastage occurs in the developed world; per capita food waste by consumers (not including the production process) in Europe and North America is around 95-115kg per year, compared to just 6-11kg in sub-Saharan Africa and South/South-East Asia. Large amounts of food is still lost during the production process in developing countries, however, due to lack of infrastructure and poor equipment. Wastage at the consumption stage in these countries, meanwhile, is drastically less than developed nations.</p>
			</div>
			<div className="container-level2">
				<div className="center"><div className="center-img-home"><img src="images/country.png" alt="food"/></div></div>
				<p className="text-center">Food loss and waste also has a significant impact on the environment. The carbon footprint of wasted food is estimated at 3.3 gigatonnes. In fact, if food waste were a country, it would rank behind only the US and China for greenhouse gas emissions. The production of wasted food also uses around 1.4 billion hectares of land – 28% of the world’s agricultural area. A huge amount of surface or groundwater – known as “blue water” – is also lost; about 250km3, more than 38 times the blue-water footprint of US households.</p>
				<p className="text-center">So which countries and regions are the worst offenders?</p>
				<p className="text-center">The following table shows per capita food loss and waste, at consumption and pre-consumption stages, in different regions around the world. More information on how the regions are grouped is available here.</p>
			</div>	
		  </div>
		</div>	
);

const About = ()=>(
	<div className="container-fluid">
		<div className="text-container">
			<h2>About the Campaign</h2>
			<p className="text">A recent study has revealed that about one third of all food production world-wide gets lost or wasted in the food production and consumption systems, amounting to 1.3 billion tonnes. In industrialized nations,  retailers and consumers discard around 300 million tonnes that is fit for consumption, around half of the total food squandered in these regions.  This is more than the total net food production of Sub-Saharan Africa and would be sufficient to feed the estimated 900 million people hungry in the world. (FAO)</p>
			<p className="textHead">What is food loss/waste all about?</p>
			<p className="text">Technically speaking, food loss and waste refer to the decrease in mass (quantitative) or nutritional value (qualitative) of food - edible parts - throughout the supply chain that was intended for human consumption. Food that was originally meant for human consumption but for various reasons is removed from the human food chain is considered as food loss or waste, even if it is then directed to a non-food use (feed, bio-energy).</p>
			<ul>
				<li>Food Loss refers to food that gets spilled, spoilt or otherwise lost, or incurs reduction of quality and value during its process in the food supply chain before it reaches its final product stage. Food loss typically takes place at production, post-harvest, processing and distribution stages in the food supply chain.</li>
				<li>Food waste refers to food that completes the food supply chain up to a final product, of good quality and fit for consumption, but still doesn't get consumed because it is discarded, whether or not after it is left to spoil. Food waste typically (but not exclusively) takes place at retail and consumption stages in the food supply chain.</li>
			</ul>	
			<p className="textHead">What is the Food Waste Campaign all about?</p>
			<p className="text">The down side: food waste is a massive global problem that has negative humanitarian, environmental and financial implications.</p>
			<p className="text">The up side: with relative ease and a few simple changes to our habits, we can significantly shift this paradigm.</p>
			<p className="text">Many regional campaigns have recently been launched, echoing to the challenge of food waste at the national level and in major sectors, including hotels, restaurants, supermarkets and households. Perhaps surprisingly, one-third of all unused food in developed countries is wasted by households.</p>
		</div>
	</div>	
);

const SaveFood = ()=>(
	<div className="container-fluid">
	  <div className="text-container">
		<h2 className="rule-head">WHY SAVE FOOD</h2>
		<p className="text-first">Your food does its job best when it's on a plate ready to be enjoyed. Saving food saves money and helps to slow down global warming and deforestation. Reducing the amount of food that ends up in the bin also means you can say goodbye to unnecessary packaging waste. If we all make a few small changes and start using up the food we buy, together we can make a big difference.</p>
		<p className="text">What’s in it for you? If you are a family of four, you could be saving as much as £60 each month. So there’s a huge opportunity for all of us to cut what we spend at the checkout simply by saving more of the food we buy from the bin... and it’s a lot easier than you might think!</p>
		<p className="text">Turning less food into rubbish can also make a real difference to the world around us – and that’s something we can all get on board with. Read on to find out more about why and how to be leaner and greener, and what you could do with the money you’d save.</p>
		<div className="center"><div className="center-img"><img src="images/food-waste.jpg" alt="food"/></div></div>
		<p className="text">Every year the world wastes enough food to fill a bin 1.2km wide, 1.2 km deep and 2.1 km tall. &nbsp;Such a bin would makes the worlds tallest buildings look like matchsticks (see above).</p>
		<p className="text">About three quarters of this waste occurs before food is ever sold, during&nbsp;production, post-harvest, processing &nbsp;and distribution. The food we waste in our homes totals about<a href="http://shrinkthatfootprint.com/the-big-footprint-of-food-waste"> 50kg a person</a> each year, and rises to as much as 100kg a year in some wealthy countries. This is the equivalent of pushing every trolley of food strait into a skip.</p>
		<p className="text">Your home could easily spend as much as $1,000 a year on edible food that is never eaten.&nbsp;In the US the average is $900 a year, in the UK it’s £700 and in Australia it’s over $1,000!</p>
		<p className="text">We don’t waste food on purpose, but somehow between the demands of our busy lives and being bombarded with food on sale we’ve gotten in the habit of wasting a colossal amount of food. &nbsp;Here are five simple hacks to help you <a href="http://shrinkthatfootprint.com/how-to-save-money-on-food-waste">save food</a> in your home.</p>
		<p className="textHead">1) Plan for perishables</p>
		<p className="text"><span>About half of household food waste occurs due to things not being consumed in time (or people being squeamish about dates). This food waste is dominated by bread, fruit, vegetables, meat, dairy and pre-made meals. &nbsp;</span></p>
		<p className="text">Any person that runs a busy home plans meals each week. &nbsp;But when it comes to stopping food waste the key is to plan for perishables. &nbsp;If you’ve got too much dry spaghetti or tinned tomatoes in the cupboard its really doesn’t matter. &nbsp;But when you buy stuff that will go of in a week you need a plan to eat it or store it soon.</p>
		<p className="text">Love Food Hate Waste have some cool <a title="Menu" href="http://england.lovefoodhatewaste.com/content/meal-planning-tips">menu planning tools.</a></p>
		<p className="textHead">2) Love your freezer, fight your fridge</p>
		<p className="text">The refrigerator has a mystical ability to dissapear food from your consciousness. &nbsp;With the best intensions in the world we put things in the fridge to ‘eat later’, only to bin them when we eventually journey to the back row.</p>
		<p className="text">Getting in the habit of moving the food in your fridge is a good one. &nbsp;And if you can freeze something, then do consider it. &nbsp;Food stored in freezers is far more likely to be eaten eventually than things in a fridge. &nbsp;If you are tempted by ‘buy one get one free offers’ then checking that they can be frozen is a useful thing to do.</p>
		<p className="textHead">3) Quickly measure portions</p>
		<p className="text">The second half of household food waste arises due to preparing more than we eat. &nbsp;For things like cereals, rice, pasta just having a very simple measuring cup or scale that takes 5 seconds can do wonders to reduce ‘plate waste’.</p>
		<p className="text">It is also much easier to add a little something to a meal if you’re still peckish, so experimenting with smaller portions is a good one.</p>
		<p className="textHead">4) Grocery shop online</p>
		<p className="text">Have you every noticed that the closer you get to the checkout the more sweets and treats you see. &nbsp;Supermarkets are well studied in helping you buy food you don’t need or isn’t good for. &nbsp;It’s even worse if you shop while hungy.</p>
		<p className="text">Somehow, due to the magic of the internet that allure is quite there online. &nbsp;Sitting on a computer, checking the fridge and cupboards it always seems much easier to buy the food you actually need. &nbsp;I’m sure this isn’t for everyone, but it sure does work in our house.</p>
		<p className="textHead">5) Upcycle your scraps</p>
		<p className="text">Stale bread plus garlic equals garlic bread. &nbsp;Bubble and squeak can be nicer than a roast. &nbsp;Old bananas make bread, smoothies, cakes . .</p>
		<p className="text">When you have moment, grab any food that looks like it is going to be wasted soon. &nbsp;Put it on your kitchen bench, and invent a new meal. &nbsp;You will amaze yourself!</p>
		<p className="text">This post is based the continuing feedback from our <a href="http://shrinkthatfootprint.com/how-to-save-money-and-cut-carbon">How to Save Money of Food by Wasting Less</a>&nbsp;video series.<span>&nbsp; The overwhelming lesson thus far has been that most effective strategies are the ones that are the simplest to implement.</span></p>
		<h2 className="rule-head">WHAT TO DO</h2>
		<p className="text-first">As a nation of food lovers and waste haters, it’s surprising how much of our food ends up in the bin. But with just a few small changes every day, we can cut food waste at home in half by 2025. We're here to help – providing the tips, tools and inspiration you need to make the food you love go further.</p>
		<p className="text">It takes water, energy, fuel and packaging to produce the food we all love. Does it really belong in the bin? Of course not! It’s easy to make a difference, starting at home with your own fridge in your own kitchen.
		Because more than half of the food we throw away can be eaten, keeping it out of the bin is good for our pockets and the planet combined. Read more to get the latest on how to make your weekly shop last longer and go further.</p>
	</div>
   </div>
);

const ContactUs = ()=>(
	<div className="container-fluid">
	<form id="contact">
    <h3>Happy to hear you!</h3>
    <fieldset>
      <input placeholder="Your name" type="text" tabindex="1" required autofocus />
    </fieldset>
    <fieldset>
      <input placeholder="Your Email Address" type="email" tabindex="2" required />
    </fieldset>
    <fieldset>
      <input placeholder="Your Phone Number (optional)" type="tel" tabindex="3" required />
    </fieldset>
    <fieldset>
      <input placeholder="Your Web Site (optional)" type="url" tabindex="4" required />
    </fieldset>
    <fieldset>
      <textarea placeholder="Type your message here...." tabindex="5" required ></textarea>
    </fieldset>
    <fieldset>
      <button name="submit" type="submit" id="contact-submit" data-submit="...Sending">Submit</button>
    </fieldset>
  </form>
</div>
);

const Tips = ()=>(
	<div className="container-fluid">
	  <div className="text-container">
		<h3 className="subhead">Think</h3>
		<p className="textHead">Do you Waste Food?</p>
		<p className="text">Wasting food is often a subconscious act. You might think it's not something you do, but check out these facts and you'll realise there's so much food going to waste, some of it might actually be coming from you!</p>
	    <div className="float-left"><img src="images/plate.jpg" alt="corn" /></div>
		<div className="float-right">
			<p className="textHead">Why does it happen?<br/>The main reasons for throwing away food are:</p>
			<ul><li>Your kids don’t always want to eat what you’ve cooked for them</li>
				<li>Too much has been cooked or prepared eg pasta and rice all the time</li>
				<li>It hasn’t been used in time - fruit and vegetables are a typical example because they’ve gone off in the fruit bowl or in the fridge</li>
				<li>The food hasn’t been eaten before it goes past its use-by date (keep an eye on the 'best before' and 'use-by' dates. The 'best before' dates are more about quality than safety, except for eggs. So when the date runs out it doesn't mean that the food will be harmful, but it might begin to lose its flavour and texture).</li>
			</ul>
		</div>
		<div className="clear" />
		<div className="float-right-img"><img src="images/store.jpg" alt="corn" /></div>
		<div className="float-right">
			<p className="textHead">There are all sorts of reasons why food might not get eaten in time:</p>
			<ul>
				<li>Plans change.</li>
				<li>We forget what food we have in the cupboards, forget to freeze or chill something to use at a later date.
			We simply don’t know how best to use up our leftovers.</li>
				<li>And what to do with leftover?</li>
			</ul>
			<p className="text">Why not give your leftovers a makeover?Making the most of leftovers is a great way to reduce food waste, so to help you with ideas our THINK.EAT.SAVE  partner  “Love Food Hate Waste”  have come up with a free leftover celebrity cookbook, just for you.</p>
			<p className="textHead">Is Food Waste Bad for the environment?</p>
			<p className="text">You bet! There are serious environmental implications to wasting food. The amount of food we throw away is a waste of resources. Just think about all the energy, water and packaging used in food production, transportation and storage. This all goes to waste when we throw away perfectly good food. Check out our pages and find out how you can use food and not waste it.</p>
		</div>
		<div className="clear" />
		<h3 className="subhead">EAT</h3>
	    <div className="float-left"><img src="images/veg.jpg" alt="corn" /></div>
		<div className="float-right">It goes without saying that for each and every one of us, eating is a crucial part of our daily lives. For some, the act of eating represents pure sustenance; for others, the art of eating is a ritual of culinary delights. But whatever your relationship  to food, we can all be smarter  -- about the way we eat it, serve it, shop for it and dispose of it. We hope you will find all of the necessary tools and resources you need to reduce your  foodprint here. So EAT up… but do it mindfully.</div>
		<div className="clear" />
		<h2 className="rule-head">HOW WE EAT</h2>
		<div class="center"><div class="center-img"><img src="images/girl.jpg" alt="food" /></div></div>
		<p className="text-first">Follow these top ten tips to reduce your “foodprint” and food bill! (contributions by NRDC and WRAP UK)</p>
		<ol><li>Shop Smart—plan meals, use shopping lists and avoid impulse buys. Don’t succumb to marketing tricks that lead you to buy more food than you need, particularly for perishable items. Though these may be less expensive per ounce, they can be more expensive overall if much of that food is discarded.</li>
		<li>Buy Funny Fruit—many fruits and vegetables are thrown out because their size, shape, or color are not “right”. Buying these perfectly good funny fruit, at the farmer’s market or elsewhere, utilizes food that might otherwise go to waste.</li>
		<li>Understand Expiration Dates— in the US, “sell-by” and “use-by” dates are not federally regulated and do not indicate safety, except on certain baby foods. Rather, they are manufacturer suggestions for peak quality. Most foods can be safely consumed well after their use-by dates.</li>
		<li>In the UK, “best before” dates are also generally manufacturer suggestions for peak quality. Likewise, most foods can be safely consumed well after these dates. The important date is  “use-by”: eat food by that date or check if you can freeze it.</li>
		<li>Zero Down Your Fridge—eat food that is already in your fridge before buying more or making something new, which will save time and money. Follow storage guidance to keep food at its best. Websites such as www.lovefoodhatewaste.com can help you get creative with recipes to use up anything that might go bad soon.</li>
		<li>Say Freeze and Use Your Freezer—frozen foods remain safe indefinitely. Freeze fresh produce and leftovers if you won’t have the chance to eat them before they go bad. You can also do this with take-away or delivered food, if you know you will not feel like eating it the next day.</li>
		<li>Request Smaller Portions—restaurants will often provide half-portions upon request at reduced prices.</li>
		<li>Compost—composting food scraps can reduce climate impact while also recycling nutrients.</li>
		<li>Use FIFO (First in First Out) as a kitchen rule. Check your pantry. Cook and eat first what you bought first. Store newly bought canned goods at the back of the cabinet. Keep older ones in front for easy access.</li>
		<li>Love Leftovers --tonight’s leftover chicken roast can be part of tomorrow’s sandwich. Diced older bread can become croutons. Be creative! Ask your restaurant to pack up your extras so you can eat them later. Freeze them if you don't want to eat immediately. Very few of us take leftovers home from restaurants. Don’t be embarrassed to do so!</li>
		<li>Donate—non-perishable and unspoiled perishable food can be donated to local food banks, soup kitchens, pantries and shelters. Local and national programs frequently offer free pick-up and provide reusable containers to donors.</li></ol>
		<div className="clear" />
		<h3 className="subhead">Secure</h3>
		<div className="float-left"><img src="images/corn.jpg" alt="corn" /></div>
		<div className="float-right">
		<p className="text">In secure food areas around the globe, the very act of food shopping, cooking, eating and trashing can be a mindless activity.  Little, if any, attention is paid to the way the food arrives on our grocer’s shelves, let alone the acts of harvesting, manufacturing, packaging, shipping and merchandising the food that sustains our daily lives.</p>
		<p className="text">It is therefore not surprising that there is little awareness of the amount of food that is lost and wasted along the entire food supply chain during production, distribution, consumption and disposal.  Yet the economic, social and environmental implications of this enormous food loss and waste are staggering, continue to grow and represent a real threat. It’s time to SAVE… for People, Personal Health, Planet & Pocketbook.</p>
		<p className="textHead">People</p>
		<p className="text">Worldwide, one in every seven people go to bed hungry and more than 20,000 people die of hunger every day. According to the Natural Resources Defense Council, reducing food losses by just 15% would be enough food to feed more than 25 million Americans at a time when one in six lack a secure supply of food to their tables. Further, to the extent that good produce is going to waste early in supply chains (on farms, distribution and retail), we need to be smarter about recovering that nutritious food and either sell it at a low cost or donate to underserved people. The UN Secretary-General’s Zero Hunger Challenge has challenged governments to end hunger in his lifetime. </p>
		<p className="textHead">Personal Health</p>
		<p className="text">The seeming paradox to the hunger problem is that there are more overweight than underweight people in the world today. Increasingly large portion sizes, a proliferation of global fast food chains and take away/ready made meals and cheap non-nutritious options, including soda, are leading to major health problems such as obesity and diabetes. In the U.S., restaurant servings can be 2-8 times the portion sizes recommended by the government.  </p>
		<p className="text">WHO projects that by 2015 approximately 2.3 billion people internationally will be overweight and 700 million will be obese. 347 million people worldwide have diabetes and more than 80% of these live in low and middle income countries. By 2030 diabetes deaths will double. While the overall situation is complex, planning and preparing your own food and food for you family leads to less waste (food and packaging) and is healthier overall.</p>
		<p className="textHead">Planet</p>
		<p className="text">Awareness about food waste also goes to the heart of being a more conscious consumer. Let’s attempt to create a culture of sustainability. Unsustainable consumption depletes resources beyond regenerative capacity and subsequently causes other serious negative environmental impacts. </p>
		<p className="text">The global food system has profound implications for the environment and producing more food than is consumed only exacerbates the pressures, some of which follow:</p>
		<ul><li>More than 20 per cent of all cultivated land, 30 per cent of forests and 10 per cent of grasslands are undergoing degradation;</li>
		<li>Globally 9 per cent of the freshwater resources are withdrawn, 70 per cent of this by irrigated agriculture;</li>
		<li>Agriculture and land use changes like deforestation contribute to more than 30 per cent of total global greenhouse gas emissions;</li>
		<li>Globally, the agri-food system accounts for nearly 30 per cent of end-user available energy; and,
		Overfishing and poor management contribute to declining numbers of fish, some 30 per cent of marine fish stocks are now considered over-exploited.</li></ul>
		<p className="textHead">Pocketbook</p>
		<p className="text">Wasting food means wasting money in a big way both at the household level and in businesses throughout the supply chain – about $200 billion annually in industrialized regions to be exact. According to WRAP UK, the average UK family could save 680 pounds per year, and the hospitality industry (restaurants, pubs, hotels) a significant 724 million pounds.</p>
		<p className="text">Americans throw out the equivalent of $165 billion of good food each year and will toss a whopping $282 million of uneaten turkey into the trash at Thanksgiving. On average, they throw away 20 pounds of food each month, which amounts to about $1,560 a year for a family of four, about 10 per cent of the average food budget, according to United States Department of Agriculture. Cities like New York cart off 3 million tonnes of residential and commercial waste a year that ends up in landfills across the country at a cost of over $250 million.</p>
	 </div>	
	  </div>
	</div>
);
export default Navbar;