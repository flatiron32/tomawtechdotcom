---
title: Welcome to my new site!
publishDate: 2015-08-23
layout: post.hbt
description: Welcome to my new website.
keywords: New website
---
I am trying to set up a new blog site from scratch to help learn more about the AWS service offerings and to share what I know and how I can help IT organizations. I want to document the process as much as possible. There is going to be a lot of churn at first.

To start with I have followed the [Setting Up a Static Website Using a Custom Domain](http://docs.aws.amazon.com/AmazonS3/latest/dev/website-hosting-custom-domain-walkthrough.html) walk-through at AWS. I registered [tomawtech.com](http://tomawtech.com) with [Namecheap](http://www.namecheap.com). I have also setup [dandelion](https://github.com/scttnlsn/dandelion) to synchronize the [Github repository](https://github.com/flatiron32/tomawtechdotcom) that holds the source for this site.

Here is the example [dandelion.yml](https://github.com/flatiron32/tomawtechdotcom/blob/master/dandelion.yml.tmpl) file. I do not keep the actual dandelion file in Github because it has my AWS Secret Key in it. I am investigating how to keep this stored encrypted in plain sight.

I also had to move my nameserver over to Route 53 by creating a new [Hosted Zone](http://docs.aws.amazon.com/Route53/latest/DeveloperGuide/MigratingDNS.html#Step_CreateHostedZone). This allowed me to learn a lot about name records than I knew before.