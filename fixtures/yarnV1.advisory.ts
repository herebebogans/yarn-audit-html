import { RawAuditAdvisor } from '../src/types.js';

export const yarnV1Advisory: RawAuditAdvisor = {
    findings: [
        {
            version: '3.2.0',
            paths: ['serverless>@serverless/components>@serverless/platform-client-china>archiver>async'],
        },
        { version: '3.2.0', paths: ['serverless-webpack>archiver>async'] },
        { version: '3.1.0', paths: ['async'] },
    ],
    metadata: null,
    vulnerable_versions: '>=3.0.0 <3.2.2',
    module_name: 'async',
    severity: 'high',
    github_advisory_id: 'GHSA-fwr7-v2mv-hh25',
    cves: ['CVE-2021-43138'],
    access: 'public',
    patched_versions: '>=3.2.2',
    cvss: { score: 7.8, vectorString: 'CVSS:3.1/AV:L/AC:L/PR:N/UI:R/S:U/C:H/I:H/A:H' },
    updated: '2023-01-23T18:54:20.000Z',
    recommendation: 'Upgrade to version 3.2.2 or later',
    cwe: ['CWE-1321'],
    found_by: null,
    deleted: null,
    id: 1088667,
    references:
        '- https://nvd.nist.gov/vuln/detail/CVE-2021-43138\n- https://github.com/caolan/async/commit/e1ecdbf79264f9ab488c7799f4c76996d5dca66d\n- https://github.com/caolan/async/blob/master/lib/internal/iterator.js\n- https://github.com/caolan/async/blob/master/lib/mapValuesLimit.js\n- https://jsfiddle.net/oz5twjd9/\n- https://github.com/caolan/async/pull/1828\n- https://github.com/caolan/async/commit/8f7f90342a6571ba1c197d747ebed30c368096d2\n- https://github.com/caolan/async/blob/v2.6.4/CHANGELOG.md#v264\n- https://github.com/caolan/async/compare/v2.6.3...v2.6.4\n- https://lists.fedoraproject.org/archives/list/package-announce@lists.fedoraproject.org/message/MTEUUTNIEBHGKUKKLNUZSV7IEP6IP3Q3/\n- https://lists.fedoraproject.org/archives/list/package-announce@lists.fedoraproject.org/message/UM6XJ73Q3NAM5KSGCOKJ2ZIA6GUWUJLK/\n- https://github.com/advisories/GHSA-fwr7-v2mv-hh25',
    created: '2022-04-07T00:00:17.000Z',
    reported_by: null,
    title: 'Prototype Pollution in async',
    npm_advisory_id: null,
    overview:
        'A vulnerability exists in Async through 3.2.1 for 3.x and through 2.6.3 for 2.x (fixed in 3.2.2 and 2.6.4), which could let a malicious user obtain privileges via the `mapValues()` method.',
    url: 'https://github.com/advisories/GHSA-fwr7-v2mv-hh25',
};
