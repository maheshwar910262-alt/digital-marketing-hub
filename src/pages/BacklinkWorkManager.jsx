
import React, { useEffect, useMemo, useState } from "react";
import * as XLSX from "xlsx";
import "./BacklinkWorkManager.css";

// Temporary working list. Add more verified websites here later.
const initialSites = [
  
  { name: "1ABC", url: "https://www.1abc.org" },
  { name: "1WebsDirectory", url: "https://www.1websdirectory.com" },
  { name: "4All Blahoo", url: "https://www.4all.blahoo.net" },
  { name: "Botid", url: "https://www.botid.org" },
  { name: "Hotvsnot", url: "https://www.hotvsnot.com" },
  { name: "LinkCentre", url: "https://www.linkcentre.com" },
  { name: "Triple W Directory", url: "https://www.triplewdirectory.com" },
  { name: "Cipinet", url: "https://www.cipinet.com" },
  { name: "5Submission", url: "https://www.5submission.com" },
  { name: "9Sites", url: "https://www.9sites.net" },
  { name: "10Directory", url: "https://www.10directory.com" },
  { name: "101Bookmarks", url: "https://www.101bookmarks.com" },
  { name: "411FreeDirectory", url: "https://www.411freedirectory.com" },
  { name: "A1WebDirectory", url: "https://www.a1webdirectory.org" },
  { name: "AAA Agency Search", url: "https://www.aaaagencysearch.com" },
  { name: "Bedwan", url: "https://www.bedwan.com" },
  { name: "Boing Boing", url: "https://www.boingboing.net" },
  { name: "USA Listing Directory", url: "https://www.usalistingdirectory.com" },
  { name: "Sonic Run", url: "https://www.sonicrun.com" },
  { name: "Nonar", url: "https://www.nonar.com" },
  
  { name: "10 Star Directory", url: "https://www.10stardirectory.com" },
  { name: "Startups Meet", url: "https://www.startupsmeet.com" },
  { name: "247 Web Directory", url: "https://www.247webdirectory.com" },
  { name: "AAAS Meetings", url: "https://www.aaasmeetings.org" },
  { name: "AAF14", url: "https://www.aaf14.org" },
  { name: "ABC Directory", url: "https://www.abc-directory.com" },
  { name: "Abstract Directory", url: "https://www.abstractdirectory.net" },
  { name: "Ace Directory", url: "https://www.acedirectory.org" },
  { name: "Ace Web Directory", url: "https://www.acewebdirectory.com" },
  { name: "ACRPE", url: "https://www.acrpe.com" },
  { name: "Advertising Seeds", url: "https://www.advertisingseeds.com" },
  { name: "Add Business", url: "https://www.addbusiness.net" },
  { name: "Add Free Web Directory", url: "https://www.addfreewebdirectory.com" },
  { name: "Add Good Sites", url: "https://www.addgoodsites.com" },
  { name: "Addirectory", url: "https://www.addirectory.org" },
  { name: "Add Linkz Free", url: "https://www.addlinkzfree.com" },
  { name: "AddMe", url: "https://www.addme.com" },
  { name: "Add Site", url: "https://www.addsite.info" },
  { name: "Add URL", url: "https://www.addurl.nu" },
  { name: "Add Your Site Free Submit", url: "https://www.addyoursitefreesubmit.com" },

   { name: "10 Star Directory", url: "https://www.10stardirectory.com" },
  { name: "A Funny Dir", url: "https://www.afunnydir.com" },
  { name: "AITP Network", url: "https://www.aitpnetwork.org" },
  { name: "A List Directory", url: "https://www.alistdirectory.com" },
  { name: "Alive Directory", url: "https://www.alive-directory.com" },
  { name: "All Business Directory", url: "https://www.allbusinessdirectory.biz" },
  { name: "All Dictionaries", url: "https://www.alldictionaries.com" },
  { name: "All Free Things", url: "https://www.allfreethings.com" },
  { name: "All India Services", url: "https://www.allindiaservices.com" },
  { name: "All Sites", url: "https://www.allsites.info" },
  { name: "All Sites Sorted", url: "https://www.allsitessorted.com" },
  { name: "All States USA Directory", url: "https://www.allstatesusadirectory.com" },
  { name: "All the Websites", url: "https://www.allthewebsites.org" },
  { name: "Ananar", url: "https://www.ananar.com" },
  { name: "Anaximander Directory", url: "https://www.anaximanderdirectory.com" },
  { name: "Anoox", url: "https://www.anoox.com" },
  { name: "A People Directory", url: "https://www.apeopledirectory.com" },
  { name: "Aquarius Directory", url: "https://www.aquarius-dir.com" },
  { name: "ASEPAG", url: "https://www.asepag.org" },
  { name: "Ask Directory", url: "https://www.ask-directory.com" },
  { name: "A Web List", url: "https://www.aweblist.org" },

    { name: "Banana Directories", url: "https://www.bananadirectories.com" },
  { name: "Beeg Directory", url: "https://www.beegdirectory.com" },
  { name: "Best Buy Dir", url: "https://www.bestbuydir.com" },
  { name: "Best Free Websites", url: "https://www.bestfreewebsites.net" },
  { name: "Bhanvad", url: "https://www.bhanvad.com" },
  { name: "Bing Directory", url: "https://www.bing-directory.com" },
  { name: "Blau24", url: "https://www.blau24.com" },
  { name: "Blog Directory", url: "https://www.blogdirectory.ws" },
  { name: "Blogroll", url: "https://www.blogroll.net" },
  { name: "Blog Toplist", url: "https://www.blogtoplist.com" },
  { name: "Botid", url: "https://www.botid.org" },
  { name: "Boxwind", url: "https://www.boxwind.com" },
  { name: "Bpubs", url: "https://www.bpubs.com" },
  { name: "Britain Business Directory", url: "https://www.britainbusinessdirectory.com" },
  { name: "Bubbleplex", url: "https://www.bubbleplex.com" },
  { name: "Bungee Bones", url: "https://www.bungeebones.com" },
  { name: "Business Free Directory", url: "https://www.businessfreedirectory.com" },
  { name: "Citydon", url: "https://www.citydon.co.uk" },
  { name: "Class Directory", url: "https://www.classdirectory.org" },
  { name: "Clicks or Directory", url: "https://www.clicksordirectory.com" },

    { name: "Command Results", url: "https://www.commandresults.com" },
  { name: "Craigslist Dir", url: "https://www.craigslistdir.org" },
  { name: "Craigslist Directory", url: "https://www.craigslistdirectory.net" },
  { name: "CSE Links", url: "https://www.cselinks.com" },
  { name: "Diga Business", url: "https://www.digabusiness.com" },
  { name: "Digital Eve UK", url: "https://www.digitaleveuk.org" },
  { name: "Dir Submitter", url: "https://www.dir-submitter.info" },
  { name: "Directory 6", url: "https://www.directory6.org" },
  { name: "Directory 10", url: "https://www.directory10.biz" },
  { name: "Directory Free", url: "https://www.directory-free.com" },
  { name: "Abacin Directory", url: "https://www.directory.abacin.com/" },
  { name: "Directory Analytic", url: "https://www.directoryanalytic.com" },
  { name: "Directory Business Site", url: "https://www.directorybusinesssite.org" },
  { name: "Directory Cave", url: "https://www.directorycave.com" },
  { name: "Directory Direct", url: "https://www.directorydirect.net" },
  { name: "Directory Dudes", url: "https://www.directorydudes.com" },
  { name: "Directory Fever", url: "https://www.directoryfever.com" },
  { name: "Directory Ritz", url: "https://www.directoryritz.com" },
  { name: "Directory SEO", url: "https://www.directoryseo.biz" },
  { name: "Directory Sphere", url: "https://www.directorysphere.com" },

  { name: "Directory Super", url: "https://www.directorysuper.com" },
  { name: "Directory Vault", url: "https://www.directoryvault.com" },
  { name: "Directory Wind", url: "https://www.directorywind.com" },
  { name: "Directory World", url: "https://www.directoryworld.net" },
  { name: "Dizila", url: "https://www.dizila.com" },
  { name: "DMOZ In Net", url: "https://www.dmoz.in.net" },
  { name: "DMOZ", url: "https://www.dmoz.org" },
  { name: "DMOZing", url: "https://www.dmozing.com" },
  { name: "Domaining", url: "https://www.domaining.in" },
  { name: "Domain Names SEO", url: "https://www.domainnamesseo.com" },
  { name: "Domico", url: "https://www.domico.info" },
  { name: "Draco Directory", url: "https://www.dracodirectory.com" },
  { name: "eBay Dir", url: "https://www.ebay-dir.com" },
  { name: "ECE Summit", url: "https://www.ecesummit.com" },
  { name: "EcoDir", url: "https://www.ecodir.net" },
  { name: "EF Directory", url: "https://www.efdir.com" },
  { name: "Elite Sites Directory", url: "https://www.elitesitesdirectory.com" },
  { name: "Entireweb", url: "https://www.entireweb.com" },
  { name: "European Navigator", url: "https://www.europeannavigator.eu" },
  { name: "Evolving Critic", url: "https://www.evolvingcritic.com" },

    { name: "Example Directory", url: "https://www.exampledir.com" },
  { name: "Exclusive Web Links", url: "https://www.exclusiveweblinks.com" },
  { name: "EziStreet", url: "https://www.ezistreet.com" },
  { name: "Facebook List", url: "https://www.facebook-list.com" },
  { name: "Family Directory", url: "https://www.familydir.com" },
  { name: "Find the UK", url: "https://www.findtheuk.co.uk" },
  { name: "Flexigest", url: "https://www.flexigest.com" },
  { name: "Flognaw", url: "https://www.flognaw.com" },
  { name: "Free Web Link", url: "https://www.free-weblink.com" },
  { name: "Free Directory Submit", url: "https://www.freedirectorysubmit.com" },
  { name: "Free PR Web Directory", url: "https://www.freeprwebdirectory.com" },
  { name: "Free Top Rank Directory", url: "https://www.freetoprankdirectory.com" },
  { name: "Free Trial CC", url: "https://www.freetrialcc.com" },
  { name: "Free Website Directory", url: "https://www.freewebsitedirectory.com" },
  { name: "Full Web Directory", url: "https://www.fullwebdirectory.com" },
  { name: "Gain Web", url: "https://www.gainweb.org" },
  { name: "Gateway of Links", url: "https://www.gatewayoflinks.com" },
  { name: "General Business Web Directory", url: "https://www.generalbusinesswebdirectory.com" },
  { name: "General Directory Online", url: "https://www.generaldironline.com" },
  { name: "Gigablast", url: "https://www.gigablast.com" },

    { name: "Global Directory", url: "https://www.globaldir.org" },
  { name: "GMA Web Directory", url: "https://www.gmawebdirectory.com" },
  { name: "Great Directory Links", url: "https://www.greatdirectorylinks.com" },
  { name: "Gujarat Webs", url: "https://www.gujaratwebs.com" },
  { name: "H-Log", url: "https://www.h-log.com" },
  { name: "Handtucher", url: "https://www.handtucher.net" },
  { name: "Happal", url: "https://www.happal.com" },
  { name: "Hard Directory", url: "https://www.harddirectory.net" },
  { name: "Hawk Directory", url: "https://www.hawkdirectory.com" },
  { name: "High Rank Directory", url: "https://www.highrankdirectory.com" },
  { name: "Home Directory", url: "https://www.homedirectory.biz" },
  { name: "Hot Directory", url: "https://www.hotdirectory.net" },
  { name: "Hot Webber", url: "https://www.hotwebber.com" },
  { name: "Hulu Directory", url: "https://www.huludirectory.com" },
  { name: "HV Web Directory", url: "https://www.hvwebdirectory.com" },
  { name: "Hyde Park Books", url: "https://www.hydeparkbooks.com" },
  { name: "Indexed List", url: "https://www.indexedlist.com" },
  { name: "India Catalog", url: "https://www.indiacatalog.com" },
  { name: "Info Listings", url: "https://www.info-listings.com" },
  { name: "Infobert", url: "https://www.infobert.com" },

    { name: "Information Crawler", url: "https://www.informationcrawler.com" },
  { name: "InfoTiger", url: "https://www.infotiger.com" },
  { name: "IntelSeek", url: "https://www.intelseek.com" },
  { name: "Interesting Directory", url: "https://www.interesting-dir.com" },
  { name: "Is Your Site Ranked", url: "https://www.isyoursiteranked.com" },
  { name: "ItzaList", url: "https://www.itzalist.com" },
  { name: "Jayde", url: "https://www.jayde.com" },
  { name: "Jeita Cave", url: "https://www.jeitacave.net" },
  { name: "Just Directory", url: "https://www.justdirectory.org" },
  { name: "Just Link", url: "https://www.justlink.org" },
  { name: "Lemon Directory", url: "https://www.lemon-directory.com" },
  { name: "Link Minded", url: "https://www.link-minded.com" },
  { name: "Link Devils", url: "https://www.linkdevils.com" },
  { name: "LinkDir4U", url: "https://www.linkdir4u.com" },
  { name: "LinkDir", url: "https://www.linkdir.info" },
  { name: "LinkedIn Directory", url: "https://www.linkedin-directory.com" },
  { name: "Linkpedia", url: "https://www.linkpedia.net" },
  { name: "Link Resell", url: "https://www.linkresell.com" },
  { name: "Linkroo", url: "https://www.linkroo.com" },
  { name: "Links Indexed", url: "https://www.linksindexed.com" },

    { name: "Links Maximum", url: "https://www.linksmaximum.com" },
  { name: "Links of Choice", url: "https://www.linksofchoice.com" },
  { name: "Links Placed", url: "https://www.linksplaced.com" },
  { name: "List My Website", url: "https://www.listmywebsite.net" },
  { name: "LLT8", url: "https://www.llt8.com" },
  { name: "LoadSpy", url: "https://www.loadspy.com" },
  { name: "Mainostoimistot", url: "https://www.mainostoimistot.info" },
  { name: "Major Directory", url: "https://www.majordir.com" },
  { name: "Marketing Internet Directory", url: "https://www.marketinginternetdirectory.com" },
  { name: "Maven Search", url: "https://www.mavensearch.com" },
  { name: "Mediafire Direct Link", url: "https://www.mediafiredirectlink.com" },
  { name: "Mobilen BG", url: "https://www.mobilen-bg.com" },
  { name: "Moms Directory", url: "https://www.momsdirectory.net" },
  { name: "Mugro", url: "https://www.mugro.info" },
  { name: "My Top Links", url: "https://www.my-toplinks.com" },
  { name: "My Danny SEO", url: "https://www.mydannyseo.com" },
  { name: "Name Directory", url: "https://www.namedirectory.com.ar" },
  { name: "Nertsffd", url: "https://www.nertsffd.com" },
  { name: "Nettica", url: "https://www.nettica.co" },
  { name: "OBLN", url: "https://www.obln.org" },

    { name: "Promovare Website", url: "https://www.promovarewebsite.net" },
  { name: "Ranaf", url: "https://www.ranaf.com" },
  { name: "Rank Super", url: "https://www.ranksuper.com" },
  { name: "Reddit Directory", url: "https://www.reddit-directory.com" },
  { name: "Reedeu", url: "https://www.reedeu.com" },
  { name: "Reserved Links", url: "https://www.reservedlinks.com" },
  { name: "Rock the Adored", url: "https://www.rocktheadored.com" },
  { name: "Scrub the Web", url: "https://www.scrubtheweb.com" },
  { name: "Sean Wise", url: "https://www.seanwise.com" },
  { name: "Search Domain Here", url: "https://www.searchdomainhere.com" },
  { name: "Seek Dragon", url: "https://www.seekdragon.com" },
  { name: "SEO ABCs", url: "https://www.seoabcs.com" },
  { name: "SEO Directory Online", url: "https://www.seodirectoryonline.org" },
  { name: "SEO Optimization Directory", url: "https://www.seooptimizationdirectory.com" },
  { name: "Site Promotion Directory", url: "https://www.sitepromotiondirectory.com" },
  { name: "Sites Web Directory", url: "https://www.siteswebdirectory.com" },
  { name: "SJLQC", url: "https://www.sjlqc.com" },
  { name: "Skoobe", url: "https://www.skoobe.biz" },
  { name: "MoreFunz", url: "https://www.morefunz.com" },
  { name: "USA Directory", url: "https://www.usadirectory.us" },

  { name: "OLX Directory", url: "https://www.olxdirectory.com" },
  { name: "One Sublime Directory", url: "https://www.one-sublime-directory.com" },
  { name: "Online Sweepstakes", url: "https://www.online-sweepstakes.com" },
  { name: "Online Society", url: "https://www.onlinesociety.org" },
  { name: "OnTopList", url: "https://www.ontoplist.com" },
  { name: "Operation Uplink", url: "https://www.operationuplink.org" },
  { name: "Organised Links", url: "https://www.organisedlinks.com" },
  { name: "OurSS", url: "https://www.ourss.org" },
  { name: "Overland Agency", url: "https://www.overlandagency.com" },
  { name: "Pak Ranks", url: "https://www.pakranks.com" },
  { name: "Picktu", url: "https://www.picktu.com" },
  { name: "Poor Directory", url: "https://www.poordirectory.com" },
  { name: "Popular Directory Biz", url: "https://www.populardirectory.biz" },
  { name: "Popular Directory Org", url: "https://www.populardirectory.org" },
  { name: "PR Directory List", url: "https://www.prdirectorylist.com" },
  { name: "Pressalink", url: "https://www.pressalink.com" },
  { name: "Professor of the Open Web", url: "https://www.professoroftheopenweb.org" },
  { name: "Prolink Directory", url: "https://www.prolink-directory.com" },
  { name: "Prolink Directory", url: "https://www.prolinkdirectory.com" },
  { name: "Promote Business Directory", url: "https://www.promotebusinessdirectory.com" },

    { name: "Blog Directory", url: "https://blog-directory.org" },
  { name: "Bloggernity", url: "https://www.bloggernity.com" },
  { name: "Sleek Directory", url: "https://www.sleekdirectory.com" },
  { name: "SMS Web", url: "https://www.smsweb.org" },
  { name: "SoMuch", url: "https://www.somuch.com" },
  { name: "Sublime Directory", url: "https://www.sublimedir.net" },
  { name: "Submission Link", url: "https://www.submissionlink.com" },
  { name: "Submissions Bank", url: "https://www.submissionsbank.com" },
  { name: "Submission Web Directory", url: "https://www.submissionwebdirectory.com" },
  { name: "Submit Biz", url: "https://www.submit.biz" },
  { name: "Submit for SEM", url: "https://www.submitforsem.com" },
  { name: "Submit Link", url: "https://www.submitlink.com.ar" },
  { name: "Submit Your Link", url: "https://www.submityourlink.com.ar" },
  { name: "Submit Your Site", url: "https://www.submityoursite.us" },
  { name: "Suggest URL", url: "https://www.suggest-url.net" },
  { name: "SW Kong", url: "https://swkong.com" },
  { name: "Synergy Directory", url: "https://www.synergy-directory.com" },
  { name: "Target Directory", url: "https://www.target-directory.com" },
  { name: "Target Link", url: "https://www.targetlink.biz" },
  { name: "Taurus Directory", url: "https://www.taurusdirectory.com" },
    { name: "Tech Valley Science Center", url: "https://www.techvalleysciencecenter.com" },
  { name: "Tesoro Directo", url: "https://www.tesorodirecto.us" },
  { name: "Text Link Directory", url: "https://www.textlinkdirectory.com" },
  { name: "Thales Directory", url: "https://www.thalesdirectory.com" },
  { name: "The Directory Listings", url: "https://www.thedirectorylistings.org" },
  { name: "Top Site List", url: "https://www.top-site-list.com" },
  { name: "Top Linkage", url: "https://www.toplinkage.net" },
  { name: "To Webmaster", url: "https://www.towebmaster.net" },
  { name: "Traffic Directory", url: "https://www.trafficdirectory.org" },
  { name: "Triple W Directory", url: "https://www.triplewdirectory.com" },
  { name: "TSection", url: "https://www.tsection.com" },
  { name: "TXT Links", url: "https://www.txtlinks.com" },
  { name: "Unique Listing", url: "https://www.unique-listing.com" },
  { name: "Unique Titles", url: "https://www.uniquetitles.com" },
  { name: "UPS Directory", url: "https://www.upsdirectory.com" },
  { name: "URL Directing", url: "https://www.urldirecting.com" },
  { name: "Usability Netzwerk", url: "https://www.usability-netzwerk.de" },
  { name: "USA Websites Directory", url: "https://www.usawebsitesdirectory.com" },
  { name: "USGeo", url: "https://www.usgeo.org" },
  { name: "Viesearch", url: "https://www.viesearch.com" },

    { name: "VIP Dig", url: "https://www.vipdig.com" },
  { name: "Vision IQ", url: "https://www.vision-iq.com" },
  { name: "VSEO", url: "https://www.vseo.biz" },
  { name: "W3 Catalog", url: "https://www.w3catalog.com" },
  { name: "Web Directory 1", url: "https://www.webdirectory1.biz" },
  { name: "Web Directory Ring", url: "https://www.webdirectoryring.com" },
  { name: "Weboworld", url: "https://www.weboworld.com" },
  { name: "WeWebWare", url: "https://www.wewebware.com" },
  { name: "WLD Directory", url: "https://www.wlddirectory.com" },
  { name: "WL Directory", url: "https://www.wldirectory.com" },
  { name: "World Web Directory", url: "https://www.worldweb-directory.com" },
  { name: "WVC Hoops", url: "https://www.wvchoops.com" },
  { name: "BlogFlux", url: "https://www.blogflux.com" },
  { name: "Yellow Linker", url: "https://www.yellowlinker.com" },
  { name: "Your Link Market", url: "https://www.yourlinkmarket.com" },
  { name: "Zelsec", url: "https://www.zelsec.com" },
  { name: "PR3 Plus", url: "https://www.pr3plus.com" },
  { name: "Royal Linkup", url: "https://www.royallinkup.com" },
  { name: "Nipao", url: "https://www.nipao.org" },
  { name: "Directory Fire", url: "https://www.directoryfire.com" },

    { name: "Ayroo", url: "https://www.ayroo.com" },

      { name: "Find It Now Directory", url: "https://www.finditnowdirectory.com.au/" },
  { name: "Drigz", url: "https://drigz.com/" },
  { name: "World Web Directory", url: "https://worldweb-directory.com/" },
  { name: "7 Stars Directory", url: "https://www.7starsdirectory.com/" },
];

const STORAGE_KEY = "backlinkWorkManager_v1";

function readSavedData() {
  try {
    const saved = localStorage.getItem(STORAGE_KEY);
    return saved ? JSON.parse(saved) : {};
  } catch {
    return {};
  }
}

export default function BacklinkWorkManager() {
  const [savedData, setSavedData] = useState(readSavedData);
  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState("all");
  const [selected, setSelected] = useState([]);
  const [notice, setNotice] = useState("");

  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(savedData));
    } catch {
      setNotice("Browser storage unavailable. Your latest changes may not persist.");
    }
  }, [savedData]);

  const sites = useMemo(
    () =>
      initialSites.map((site) => ({
        ...site,
        ...(savedData[site.url] || {}),
      })),
    [savedData]
  );

  const filteredSites = sites.filter((site) => {
    const matchesSearch =
      site.name.toLowerCase().includes(search.toLowerCase()) ||
      site.url.toLowerCase().includes(search.toLowerCase());

    const matchesFilter =
      filter === "all" ||
      (filter === "done" && site.done) ||
      (filter === "pending" && !site.done) ||
      (filter === "best" && site.best);

    return matchesSearch && matchesFilter;
  });

  function updateSite(url, changes) {
    setSavedData((previous) => ({
      ...previous,
      [url]: {
        ...(previous[url] || {}),
        ...changes,
      },
    }));
  }

  async function copyURL(url) {
    try {
      await navigator.clipboard.writeText(url);
      setNotice("URL copied!");
    } catch {
      setNotice("Copy failed. Please copy the URL manually: " + url);
    }
  }

  function toggleSelected(url) {
    setSelected((previous) =>
      previous.includes(url)
        ? previous.filter((item) => item !== url)
        : [...previous, url]
    );
  }

  function downloadExcel() {
    const chosen = sites.filter((site) => selected.includes(site.url));

    if (!chosen.length) {
      setNotice("First select the websites you want to export.");
      return;
    }

    const rows = chosen.map((site) => ({
      Website: site.name,
      URL: site.url,
      Status: site.done ? "Done" : "Pending",
      "Selected as Best": site.best ? "Yes" : "No",
    }));

    const worksheet = XLSX.utils.json_to_sheet(rows);
    const workbook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(workbook, worksheet, "Backlink Websites");
    XLSX.writeFile(workbook, "selected-backlink-websites.xlsx");
    setNotice(`${chosen.length} selected websites exported.`);
  }

  const completedCount = sites.filter((site) => site.done).length;

  return (
    <main className="bwm-page">
      <header className="bwm-header">
        <span className="bwm-kicker">SEO WORKSPACE</span>
        <h1>Backlink Work Manager</h1>
        <p>
          Track your backlink outreach, save completed work, and export only
          the websites you select.
        </p>
      </header>

      <section className="bwm-summary">
        <div className="bwm-summary-card">
          <span>Total websites</span>
          <strong>{sites.length}</strong>
        </div>
        <div className="bwm-summary-card">
          <span>Completed</span>
          <strong>{completedCount}</strong>
        </div>
        <div className="bwm-summary-card">
          <span>Selected for Excel</span>
          <strong>{selected.length}</strong>
        </div>
      </section>

      <section className="bwm-toolbar">
        <input
          type="search"
          placeholder="Search website or URL..."
          value={search}
          onChange={(event) => setSearch(event.target.value)}
          aria-label="Search websites"
        />

        <select
          value={filter}
          onChange={(event) => setFilter(event.target.value)}
          aria-label="Filter websites"
        >
          <option value="all">All websites</option>
          <option value="pending">Pending</option>
          <option value="done">Completed</option>
          <option value="best">Marked Best</option>
        </select>

        <button className="bwm-export" onClick={downloadExcel}>
          Download Selected Excel
        </button>
      </section>

      {notice && (
        <div className="bwm-notice" role="status">
          <span>{notice}</span>
          <button onClick={() => setNotice("")} aria-label="Dismiss message">
            ×
          </button>
        </div>
      )}

      <section className="bwm-list">
        {filteredSites.map((site, index) => (
          <article
            className={`bwm-card ${site.done ? "is-done" : ""}`}
            key={site.url}
          >
            <label className="bwm-select" title="Select for Excel export">
              <input
                type="checkbox"
                checked={selected.includes(site.url)}
                onChange={() => toggleSelected(site.url)}
                aria-label={`Select ${site.name} for Excel`}
              />
            </label>

            <span className="bwm-number">{index + 1}</span>

            <div className="bwm-site-info">
              <h2>
                {site.done && <span className="bwm-green-tick">✓ </span>}
                {site.name}
              </h2>
              <a href={site.url} target="_blank" rel="noopener noreferrer">
                {site.url}
              </a>
              <span className={`bwm-status ${site.done ? "done" : "pending"}`}>
                {site.done ? "Completed" : "Pending"}
              </span>
            </div>

            <div className="bwm-actions">
              <button onClick={() => copyURL(site.url)}>Copy</button>

              <a
                className="bwm-open"
                href={site.url}
                target="_blank"
                rel="noopener noreferrer"
              >
                Open ↗
              </a>

              <button
                className={site.best ? "bwm-best active" : "bwm-best"}
                onClick={() => updateSite(site.url, { best: !site.best })}
              >
                {site.best ? "★ Best" : "☆ Mark Best"}
              </button>

              <button
                className={site.done ? "bwm-done active" : "bwm-done"}
                onClick={() => updateSite(site.url, { done: !site.done })}
              >
                {site.done ? "✓ Done" : "Mark Done"}
              </button>
            </div>
          </article>
        ))}

        {filteredSites.length === 0 && (
          <div className="bwm-empty">No websites match your search.</div>
        )}
      </section>

      <p className="bwm-footnote">
        Note: These are platform homepages, not verified submission pages.
        Some platforms restrict promotional links or require approval. Review
        each platform's rules before posting. A green tick records your own
        progress; it does not verify that a backlink was published or indexed.
      </p>
    </main>
  );
}
