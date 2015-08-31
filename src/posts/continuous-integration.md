---
title: Continuous Integration!
date: 2015-08-25
---
I initially had this site synchronized with my S3 Bucket using the [dandelion](https://github.com/scttnlsn/dandelion) tool. However that meant that I had to execute a separate command to deploy the code.

<pre>
git add index.html
git commit -m "Added great content about the new work I am doing"
git push
dandelion deploy #Grrrrr
</pre>

While one more command may not appear to be a lot. It is a 25% increase. That increase is also very risky as it is for a tool that is not part of my normal tool-chain. I know I will forget how to use it with any pause in use. Finally, automation is a first order feature of any product. I cannot automate the git commands, but I can automate deployments.

At first I search in vain for a tool that would work for me. My initial path was a [complicated GitHub webhook to an AWS Lambda function](https://aws.amazon.com/blogs/compute/dynamic-github-actions-with-aws-lambda/). While that sounds cool and I would have learned a lot, my gut told me that was way too complicated. I also looked at using [CodeDeploy](http://docs.aws.amazon.com/codedeploy/latest/userguide/how-to-push-revision.html) and a lot of other dead ends. Eventually my GoogleFu was successful after a tweet begging for help.

> I want to push files on commit to [@github](https://twitter.com/github) repo to [@awscloud](https://twitter.com/awscloud) S3\. I cannot find an existing solution & I must be using the wrong search term.
> 
> — Jacob Tomaw (@JacobTomaw) [August 26, 2015](https://twitter.com/JacobTomaw/status/636617029231972352)

I found [instructions](http://www.thoughtworks.com/insights/blog/continuous-deployment-static-website-aws-snapci) to use [Snap CI](https://snap-ci.com) to do deployments. I also discovered that [Travis CI can do the same thing.](http://docs.travis-ci.com/user/deployment/s3/)

I now have a very simple pipeline in Snap CI that will deploy to S3\. The important bit is the command that the stage will run.

<pre>
aws s3 sync . s3://tomawtech.com --exclude .gitignore --exclude README.md --acl public-read --region us-east-1 --delete
</pre>

Snap CI put in some good defaults, but it was still useful to check the [AWS S3 sync documentation](http://docs.aws.amazon.com/cli/latest/reference/s3/sync.html). The pipeline is setup to run with every commit and I will be notified if something bad ever happens. I can also see the status on the site's repository [home page](https://github.com/flatiron32/tomawtechdotcom).

**In other news** I added [bootstrap](http://getbootstrap.com/) to the site with [united](https://bootswatch.com/united/) theme from Bootswatch. I still have a lot to learn about Bootstrap.

Upcoming To Do:

*  Email Forwarding
*  Logo
*  Site Template Processing - So every page looks the same.