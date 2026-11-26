import { getTeamMember, teamMembers } from './team';

export function getConsentClinicianGdcNumbers(): Record<string, string> {
  return Object.fromEntries([
    ...teamMembers.map((member) => [member.name, member.gdc ?? '']),
    ['Dr. Alex Rawlins', getTeamMember('dr-alexandra-rawlins').gdc ?? ''],
  ]);
}
