import { Pencil } from "lucide-react";
import { EmployeeAvatar } from "./employee-avatar";
import { StatusToggle } from "./status-toggle";

export interface Employee {
  id: string;
  name: string;
  avatar: string;
  directManager: string;
  managerAvatar: string;
  position: string;
  submittedRequests: number;
  phoneNumber: string;
  email: string;
  isActive: boolean;
}

interface EmployeeTableRowProps {
  employee: Employee;
  activateLabel: string;
  deactivateLabel: string;
  isRTL: boolean;
}

export function EmployeeTableRow({
  employee,
  activateLabel,
  deactivateLabel,
  isRTL,
}: EmployeeTableRowProps) {
  return (
    <tr className="border-b border-gray-100 transition-colors hover:bg-gray-50">
      <td className="px-4 py-4">
        <EmployeeAvatar name={employee.name} imageSeed={employee.avatar} />
      </td>

      <td className="px-4 py-4">
        <EmployeeAvatar
          name={employee.directManager}
          imageSeed={employee.managerAvatar}
        />
      </td>

      <td className="px-4 py-4">
        <span className="text-sm text-gray-600">{employee.position}</span>
      </td>

      <td className="px-4 py-4 text-center">
        <span className="text-sm font-semibold text-gray-700">
          {employee.submittedRequests}
        </span>
      </td>

      <td className="px-4 py-4">
        <span className="text-sm text-gray-600">{employee.phoneNumber}</span>
      </td>

      <td className="px-4 py-4">
        <span className="text-sm text-gray-600">{employee.email}</span>
      </td>

      <td className="px-4 py-4">
        <div className="flex justify-center">
          <StatusToggle initialStatus={employee.isActive} />
        </div>
      </td>

      <td className="px-4 py-4">
        <div className="flex items-center gap-2">
          <button
            className={`rounded-lg px-4 py-1.5 text-xs font-semibold text-white transition-all ${
              employee.isActive
                ? "bg-pink-500 hover:bg-pink-600"
                : "bg-green-500 hover:bg-green-600"
            }`}
          >
            {employee.isActive ? deactivateLabel : activateLabel}
          </button>
          <button
            className="rounded-lg p-2 text-blue-500 transition-colors hover:bg-blue-50"
            aria-label="Edit"
          >
            <Pencil size={16} />
          </button>
        </div>
      </td>
    </tr>
  );
}
