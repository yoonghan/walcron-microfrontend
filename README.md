# Walcron Microfrontend

Micro-front end component that lets program to run in different project and intershare workloads.

| Project          | Ref                             | Description                                           |
| ---------------- | ------------------------------- | ----------------------------------------------------- |
| container        | walcron-microfrontend-container | main code to stitch new frontend                      |
| profiler         | walcron-microfrontend-profiler  | monitors heatbeat and visual graph of performance     |
| shared-component | walcron-microfrontend-shared    | direct npm shared components that requires publishing |

## Caveat

1. Only allows to run on client side scripting
2. Do NOT user workspace, reason is to have each module independant.
