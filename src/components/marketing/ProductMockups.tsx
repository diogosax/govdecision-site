import type { ReactNode } from "react";
import { Icon } from "@/components/ui/Icon";
import { FieldRow, Meter, Pill, WindowFrame } from "./MockupKit";

/**
 * Product-style mockups for the Platform page. All content is generic sample
 * data ("Acme Industrial" is a placeholder company — no real organizations).
 */

function Tag({ children }: { children: ReactNode }) {
  return (
    <span className="rounded-lg bg-surface px-2.5 py-1 text-xs font-medium text-plum/80">
      {children}
    </span>
  );
}

function Avatar({ initials }: { initials: string }) {
  return (
    <span className="flex h-6 w-6 items-center justify-center rounded-full bg-plum/10 text-[0.6rem] font-bold text-plum">
      {initials}
    </span>
  );
}

export function SupplierPassportMockup() {
  return (
    <WindowFrame title="govdecision · Supplier Passport" badge="Sample">
      <div className="flex items-center gap-3">
        <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-plum text-sm font-bold text-white">
          AI
        </span>
        <div>
          <h4 className="text-base font-bold text-plum">Acme Industrial</h4>
          <p className="text-xs text-slate">
            Manufacturer · Technical supplies · Est. 2009
          </p>
        </div>
        <Pill tone="good">
          <Icon name="check" size={12} />
          Verified profile
        </Pill>
      </div>

      <div className="mt-5">
        <p className="text-xs font-semibold uppercase tracking-wide text-slate">
          Capabilities
        </p>
        <div className="mt-2 flex flex-wrap gap-1.5">
          <Tag>Industrial valves</Tag>
          <Tag>Pumps</Tag>
          <Tag>Maintenance kits</Tag>
          <Tag>On-site service</Tag>
        </div>
      </div>

      <div className="mt-4 grid grid-cols-2 gap-3">
        <div className="rounded-2xl bg-surface/60 p-3">
          <p className="text-xs font-semibold uppercase tracking-wide text-slate">
            Certifications
          </p>
          <ul className="mt-2 space-y-1.5 text-sm text-plum/85">
            <li className="flex items-center gap-2">
              <Icon name="check" size={13} className="text-emerald-500" />
              ISO 9001
            </li>
            <li className="flex items-center gap-2">
              <Icon name="check" size={13} className="text-emerald-500" />
              ISO 14001
            </li>
            <li className="flex items-center gap-2 text-amber-600">
              <span className="h-3 w-3 rounded-full border border-amber-400" />
              Sector certificate — pending
            </li>
          </ul>
        </div>
        <div className="rounded-2xl bg-surface/60 p-3">
          <p className="text-xs font-semibold uppercase tracking-wide text-slate">
            Markets enabled
          </p>
          <div className="mt-2 flex flex-wrap gap-1.5">
            <Tag>United States</Tag>
            <Tag>Brazil</Tag>
            <Tag>Mexico</Tag>
          </div>
        </div>
      </div>

      <div className="mt-4">
        <Meter value={78} label="Export readiness" tone="coral" />
      </div>
    </WindowFrame>
  );
}

export function ReadinessWorkspaceMockup() {
  const tasks = [
    { t: "Upload financial statements", who: "FN", due: "Done", done: true },
    { t: "Confirm local registration path", who: "LM", due: "Jun 26", done: false },
    { t: "Renew technical certificate", who: "TS", due: "Jul 02", done: false },
    { t: "Prepare guarantee letter", who: "FN", due: "Jul 05", done: false },
  ];
  return (
    <WindowFrame title="govdecision · Readiness Workspace" badge="Sample">
      <div className="flex items-center justify-between">
        <div>
          <h4 className="text-base font-bold text-plum">Readiness checklist</h4>
          <p className="text-xs text-slate">United States · Federal agency</p>
        </div>
        <Pill tone="coral">72% ready</Pill>
      </div>
      <div className="mt-4">
        <Meter value={72} label="Overall readiness" tone="coral" />
      </div>
      <ul className="mt-4 divide-y divide-line/70">
        {tasks.map((task) => (
          <li
            key={task.t}
            className="flex items-center gap-3 py-2.5 text-sm"
          >
            <span
              className={`flex h-5 w-5 items-center justify-center rounded-md border ${
                task.done
                  ? "border-emerald-500 bg-emerald-500 text-white"
                  : "border-line bg-white"
              }`}
            >
              {task.done && <Icon name="check" size={12} />}
            </span>
            <span
              className={`flex-1 ${
                task.done ? "text-slate line-through" : "text-plum/90"
              }`}
            >
              {task.t}
            </span>
            <Avatar initials={task.who} />
            <span
              className={`w-14 text-right text-xs font-semibold ${
                task.done ? "text-emerald-600" : "text-slate"
              }`}
            >
              {task.due}
            </span>
          </li>
        ))}
      </ul>
    </WindowFrame>
  );
}

export function CountryPackMockup() {
  return (
    <WindowFrame title="govdecision · Country Pack" badge="Sample">
      <div className="flex items-center gap-3">
        <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-plum text-sm font-bold text-white">
          US
        </span>
        <div>
          <h4 className="text-base font-bold text-plum">United States pack</h4>
          <p className="text-xs text-slate">Federal procurement · Active focus</p>
        </div>
      </div>
      <div className="mt-4 divide-y divide-line/70">
        <FieldRow label="Sources" value="Official + aggregated" />
        <FieldRow label="Registration" value="Entity registration required" />
        <FieldRow label="Eligibility" value="Set-aside rules apply" />
        <FieldRow label="Local partner" value="Recommended for some buyers" />
        <FieldRow label="Submission" value="Electronic portal" />
        <FieldRow label="Currency / language" value="USD · English" />
      </div>
      <div className="mt-4 flex items-center gap-2 rounded-2xl bg-amber-50 p-3 text-xs text-amber-700">
        <Icon name="shield" size={15} />
        Operational friction: registration renewal and representations to track.
      </div>
    </WindowFrame>
  );
}

export function DealRoomMockup() {
  return (
    <WindowFrame title="govdecision · Deal Room" badge="Sample">
      <div className="flex items-center justify-between">
        <div>
          <p className="text-[0.7rem] font-semibold uppercase tracking-[0.16em] text-coral">
            Executive decision memo
          </p>
          <h4 className="mt-1 text-base font-bold text-plum">
            Technical supplies — federal
          </h4>
        </div>
        <Pill tone="coral">Pursue with conditions</Pill>
      </div>
      <div className="mt-4 space-y-3 text-sm">
        <div className="rounded-2xl bg-surface/60 p-3">
          <p className="text-xs font-semibold uppercase tracking-wide text-slate">
            Route choice
          </p>
          <p className="mt-1 font-semibold text-plum">
            Local partner + readiness checklist
          </p>
        </div>
        <div className="grid grid-cols-2 gap-3">
          <div className="rounded-2xl bg-surface/60 p-3">
            <p className="text-xs font-semibold uppercase tracking-wide text-slate">
              Key risk
            </p>
            <p className="mt-1 font-semibold text-plum">Guarantee timing</p>
          </div>
          <div className="rounded-2xl bg-surface/60 p-3">
            <p className="text-xs font-semibold uppercase tracking-wide text-slate">
              Pricing basis
            </p>
            <p className="mt-1 font-semibold text-plum">Landed + service</p>
          </div>
        </div>
      </div>
      <div className="mt-4 flex items-center justify-between rounded-2xl border border-line p-3">
        <div className="flex items-center gap-2">
          <Avatar initials="CE" />
          <Avatar initials="CF" />
          <Avatar initials="OP" />
          <span className="text-xs text-slate">Approval workflow</span>
        </div>
        <Pill tone="warn">2 of 3 approved</Pill>
      </div>
    </WindowFrame>
  );
}

export function PostAwardMockup() {
  const milestones = [
    { t: "Contract signed", done: true },
    { t: "Guarantee issued", done: true },
    { t: "First delivery", done: false },
    { t: "Acceptance & invoice", done: false },
  ];
  return (
    <WindowFrame title="govdecision · Post-Award Enablement" badge="Sample">
      <div className="flex items-center justify-between">
        <h4 className="text-base font-bold text-plum">Delivery readiness</h4>
        <Pill tone="good">On track</Pill>
      </div>
      <ol className="mt-4 space-y-0">
        {milestones.map((m, i) => (
          <li key={m.t} className="flex gap-3">
            <div className="flex flex-col items-center">
              <span
                className={`flex h-5 w-5 items-center justify-center rounded-full text-white ${
                  m.done ? "bg-coral" : "bg-line"
                }`}
              >
                {m.done && <Icon name="check" size={12} />}
              </span>
              {i < milestones.length - 1 && (
                <span className="h-7 w-px bg-line" />
              )}
            </div>
            <span
              className={`pb-3 text-sm ${
                m.done ? "font-semibold text-plum" : "text-slate"
              }`}
            >
              {m.t}
            </span>
          </li>
        ))}
      </ol>
      <div className="mt-2 space-y-3">
        <Meter value={45} label="Working capital coverage" tone="coral" />
        <div className="flex items-center justify-between text-sm">
          <span className="text-slate">Payment timing</span>
          <span className="font-semibold text-plum">Net 30 after acceptance</span>
        </div>
      </div>
    </WindowFrame>
  );
}
