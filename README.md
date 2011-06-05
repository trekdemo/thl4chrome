The Hit List handles URLs with 'thehitlist' scheme in the following manner:


Look up by UID
==============

Show the task or group with the UID in The Hit List application.

	thehitlist:///<UID>


Look up by Group Name
=====================

Show group with name 'group2', that is a subgroup of 'group1'.

	thehitlist:///<group1>/<group2>


Task Creation
=============

Add new task to group with name 'group'.

	thehitlist:///<group>/tasks?method=POST&index=<n>&title=<title>&notes=<notes>

	You can only add to lists and the Today group.


Parameters
-------------------

- method

	This has to be 'POST' for task creation.

- title

	Title of the new task

- notes

	Notes to include in the task

- url

	The URL to include in the task notes

- startDate, dueDate

	Dates can be specified using the shorthand value that The Hit List application understands. For
	example, "6/4", "June 4, 2010", "4" (4th of the next month), "wed", "4d" (in four days),
	"today", "t" (today), and so on and so on. If you add a task to the Today group, the start date
	gets automatically set to today.

- estimatedTime

	Example values are 30m, 0.5h 1d, and so on.

- priority

	Priority can range from 0 to 9 where 0 is no priority

- index

	An index value of n will insert to that index in the group or task. Index of -1 is a special
	case where it will add to the end of the list, the default is 0.
