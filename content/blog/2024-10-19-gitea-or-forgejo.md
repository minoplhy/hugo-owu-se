+++
title = "Gitea and Forgejo, Late 2024 Edition"
date = "2024-10-19T12:40:00+00:00"
slug = "gitea-and-forgejo"
#
# lastmod is optional
#
# lastmod = "Timestamp that you edit this blog"

#
# description is optional
#
description = "Ranting about Gitea, Forgejo and open-source enviroment recently."

tags = ["blog","opinion",]
+++

***Note: This is rant***

## The beginnings

24 October 2022, A Surprisingly announcement was made on [Gitea Blog](https://blog.gitea.com/open-source-sustainment/). that for the long-term success of the project, the for-profit Gitea Limited was created so that companies can contribute back to the project via sponsorship, donation, etc.[^Gitea Corporate Support] but the lack of communication and transparency behind the establishment of the company. and also Gitea Limited also had taken over the domain/trademark previously owned by Lunny Xiao[^openletter_blog], founder of Gitea. Some contributors objected and made an [open letter](https://gitea-open-letter.coding.social/) about it, requesting the trademark/domain to be owned by a Non-Profit that's owned by Gitea community, which remained unanswered(to this day) and so Forgejo has been created as a drop-in replacement soft-fork of Gitea on 15 Dec of the same year.

## Right now

Fast-forward to October 2024, and Gitea now offers a Hosted service(operated by CommitGo, Inc.), self-host Gitea Enterprise(operated by CommitGo, Inc.), and a so-called "Community version"(satire).

While Forgejo maintains a "soft"-fork status until 15 Feb 2024.([forgejo/governance#58](https://codeberg.org/forgejo/governance/issues/58), [Blog Post](https://forgejo.org/2024-02-forking-forward/)). When Forgejo announced that it'd be a hard fork and be completely independent of Gitea, While still thriving to make API compatible with Gitea[^Gitea API] and drop-in replacement is currently possible, the future might not.

The main difference between Gitea and Forgejo right now is not functionality but rather a project vision and management. 

While Gitea still maintained a democratic election of "Technical Oversight Committee" members which 3 appointed and 3 elected, its domain and trademark are under the umbrella of Gitea Limited. Its enterprise and Cloud are maintained by CommitGo Inc. which was founded by members of the Technical Oversight Committee[^CommitGo TOC] while `"Gitea Enterprise is an offering of CommitGo, not the Technical Oversight Committee of Gitea or the Gitea project itself"`[^CommitGo Enterprise] Also, the community elected TOC will receive 500$ monthly compensation from opencollective.[^Gitea Contribution]

In the case of Forgejo, there's no project leader or TOC but rather an agreement to be part of Responsibility which will decide by "the Forgejo community"[^Forgejo Commuinity]. While Forgejo is under the umbrella by Codeberg e.V.[^forgejo governance] there isn't any trademark registered by Forgejo[^Forgejo Controller]. There's no compensation for contributors in Forgejo on a general basis, if there is, Forgejo is transparent about it. [Link](https://codeberg.org/forgejo/sustainability). 

## Comparison table

So, which one is better? To be fair to both sides I made a comparison table to compare Forgejo, Gitea and other self-host Git servers.

|                       |Gitea                                          										| Forgejo                                       										|SourceHut																					| Gogs												| cgit						|
|---------------------------|----------------------------------------|-----------------------------------------|-----------------------------------------|-----------------------------------------|-----------------------------------------|
|**License**            | MIT                                            										| MIT until v8.0.3 / GPLv3+ v9.0                 										| AGPLv3 and MIT                                 											| MIT												| GPLv2						|
|**Version**            | Open-Source, Enterprise(LTS, ESR[^Gitea Enterprise Versioning]), Cloud				| Open-Source                                    										| Open-Source                                    											| Open-Source										| Open-Source				|
|**Official Image**		| Docker, Kubernates                             										| Docker                                         										| *None*                                         											| Docker											| *None*					|
|**Controller**         | Gitea Limited, CommitGo, Inc(Enterprise, Cloud)[^CommitGo Enterprise]					| *Non Profit* Codeberg e.V.[^forgejo governance]                 						| Drew DeVault                                   											| Joe Chen([@unknwon](https://github.com/unknwon))	| Jason A. Donenfeld	 	|
|**Official CI/CD**     | [Built-in](https://docs.gitea.com/usage/actions/overview) GitHub alike[^runner fork]	| [forgejo/runner](https://code.forgejo.org/forgejo/runner) GitHub alike[^runner fork]	| [builds.sr.ht](https://man.sr.ht/builds.sr.ht/installation.md) Custom[^sourcehut build]   | None, Third Party only							| *None*					|
|**Database** 			| mysql, postgres, mssql, sqlite3														| mysql, postgres, mssql, sqlite3														| postgres																					| mysql, postgres, mssql, sqlite3					| *None*					|
|**Version Control**    | Git                                            										| Git                                            										| Git, Mercurial                                 											| Git												| Git						|
|**Contribution**       | Pull Request                                   										| Pull Request                                   										| Email                                          											| Pull Request										| *None*					|

Aside from this, there are also honorable to be mentioned like gitweb(by git), GitLab CE, etc. which are not mentioned in the table.

## Summary

I decided to start this blog because of Matt Mullenweg's WordPress vs WPEngine incident and the damage he caused to the community. But as evil as he is, it doesn’t make WPEngine look any better, but it also doesn’t mean WordPress is heading in a good direction for open source either. 

I’ve also seen a trend of open source license changes to fight against big companies in recent years, especially in the SaaS market, which has affected many open source projects of companies that provide their software extended support for a fee. These restrictions prevent their projects from being used by big companies for free. While some turn themself into the open core. These undermine the ideology of open source and put the community in uncertainty.

Looking back at the current state of Forgejo and Gitea, Gitea finds a balance between Gitea Ltd. and community by a 3-seat democratically elected TOC. but I also hope the annual TOC election is as transparent as it used to be. And when compared to Forgejo, Gitea has a much larger group of users and contributors. But this doesn't mean TOC won't turn evil oneday.

While The Forgejo is fully community-driven. Forgejo has its own problems. Like other open-source projects, they don’t have the manpower. Forgejo is mostly driven by a few volunteers and while the project is largely community-driven, only a handful of people participate in the community. **Please Participate（⊙ｏ⊙）.**

#### Support Open-Source Project!

* [https://opencollective.com/gitea](https://opencollective.com/gitea)

* [https://liberapay.com/forgejo](https://liberapay.com/forgejo)


[^forgejo governance]: Referred from [https://forgejo.org/compare/#governance-and-transparency](https://forgejo.org/compare/#governance-and-transparency)
[^runner fork]: Both Gitea/Forgejo runner is based on their own fork of [act](https://github.com/nektos/act)
[^sourcehut build]: I took a reference from : [https://git.sr.ht/~sircmpwn/builds.sr.ht/tree/master/item/images/alpine/build.yml](https://git.sr.ht/~sircmpwn/builds.sr.ht/tree/master/item/images/alpine/build.yml)
[^CommitGo TOC]: [https://docs.gitea.com/enterprise/faq#what-is-the-relationship-between-commitgo-and-the-open-source-gitea-project](https://docs.gitea.com/enterprise/faq#what-is-the-relationship-between-commitgo-and-the-open-source-gitea-project)

		"CommitGo is a company that was founded by members of the Technical Oversight Committee of the Gitea project. Commissioning custom functionality, or being a customer of CommitGo does not provide customers a say in the direction of the project itself or the inclusion of any code."
[^CommitGo Enterprise]: [https://blog.gitea.com/gitea-enterprise#faq](https://blog.gitea.com/gitea-enterprise#faq)
[^Forgejo Commuinity]: [https://codeberg.org/forgejo/governance/src/branch/main/AGREEMENTS.md#responsibility-distribution-table](https://codeberg.org/forgejo/governance/src/branch/main/AGREEMENTS.md#responsibility-distribution-table)
[^Forgejo Controller]: [https://forgejo.org/faq/#who-owns-the-forgejo-domains-and-trademarks](https://forgejo.org/faq/#who-owns-the-forgejo-domains-and-trademarks)
[^Gitea Contribution]: [https://github.com/go-gitea/gitea/blob/main/CONTRIBUTING.md#governance-compensation](https://github.com/go-gitea/gitea/blob/main/CONTRIBUTING.md#governance-compensation)
[^openletter_blog]: [https://blog.gitea.com/a-message-from-lunny-on-gitea-ltd.-and-the-gitea-project#our-beginnings](https://blog.gitea.com/a-message-from-lunny-on-gitea-ltd.-and-the-gitea-project#our-beginnings)

		"... Throughout the life of the project, I have always personally owned both domains. As it continued to grow, I additionally trademarked the name “Gitea” in order to protect the project’s brand. ..."
[^Gitea API]: https://forgejo.org/2024-02-forking-forward/#consequences-of-becoming-a-hard-fork
    
        "The Forgejo API will strive to remain compatible with the Gitea API going forward, after the hard fork ... Forgejo will try to remain compatible with Gitea. However, Forgejo contributors shall also use their own judgement whether to implement an API or not, and how. ..."
[^Gitea Enterprise Versioning]: [https://docs.gitea.com/enterprise/features/release-cadence](https://docs.gitea.com/enterprise/features/release-cadence)
[^Gitea Corporate Support]: [https://blog.gitea.com/open-source-sustainment/](https://blog.gitea.com/open-source-sustainment/)

		"Some companies are unable to contribute back to open source via sponsorship or code contribution. Many more cannot contract individuals due to internal policies. In creating this new company, we are now able to offer support to those companies who do want to give back."